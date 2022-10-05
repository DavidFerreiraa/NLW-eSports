import express from 'express'
import { PrismaClient } from '@prisma/client';
import { covertStringHourToMinute } from './utils/covert-stringHours-to-minutes';

const app = express();
app.use(express.json())
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

    return response.status(201).json(body)
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
    return response.json(ads.map(ads =>  {
        return {
            ...ads,
            weekDays: ads.weekDays.split(',')
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

app.listen(3333)