import express from 'express'
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import { covertStringHourToMinute } from './utils/covert-stringHours-to-minutes';
import convertMinutesToHourString from './utils/convert-minutes-to-hour-string';

import fetch from 'node-fetch';

const app = express();
app.use(express.json())
app.use(cors()) //Defina aqui quais domínios poderão acessar o backend usando {origin: <dominio>}

const prisma = new PrismaClient()

/**
 * Query: .../ads?...
 * Route: .../ads/5... - Identificador
 * Body: ... - Envio de formulários e informações sensíveis
 */

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })
    return response.json(games)
})

app.post('/games/:gameId/ads', async (request, response) => {

    const gameId = request.params.gameId;
    const body:any = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hoursStart: covertStringHourToMinute(body.hoursStart),
            hourEnd: covertStringHourToMinute(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        },
    })

    const tokens = await prisma.notificationTokens.findMany({
        select: {
            token: true
        }
    })

    tokens.map(async (token) => {
        const notificationMessage = {
            to: token.token,
            sound: "default",
            title: "Vamos jogar?",
            body: "Um usuário adicionou um anúncio!"
            
        }
        console.log(token.token)

        await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(notificationMessage)
        })
        .then()
    })

    return response.status(201).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
    //uscar anúncios específicos
    const gameId = request.params.id;
    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            gameId: true,
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hoursStart: true,
            hourEnd: true,
            useVoiceChannel: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map((ads: { weekDays: string; hoursStart: number; hourEnd: number; }) =>  {
        return {
            ...ads,
            weekDays: ads.weekDays.split(','),
            hoursStart: convertMinutesToHourString(ads.hoursStart),
            hourEnd: convertMinutesToHourString(ads.hourEnd)
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    });

    return response.json({
        discord: ad.discord,
    })
})

app.post("/notifications", async (request, response) => {

    const body = request.body;

    const tokenAlredyExists = await prisma.notificationTokens.findUnique({
        where: {
            token: body.token
        }
    })

    if (tokenAlredyExists) {
        return response.status(409)
    }

    const allToken = await prisma.notificationTokens.create({
        data: {
            token: body.token
        }
    })

    return response.status(201).json(allToken)
})

app.listen(3333)