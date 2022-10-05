import express from 'express'
import { PrismaClient } from '@prisma/client';

const app = express();
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

app.post('/ads', (request, response) => {
    response.status(201).json([

    ])
})

app.get('/games/:id/ads', (request, response) => {
    //uscar anúncios específicos
    const gameId = request.params.id;
    return response.send(gameId)
})

app.get('/ads/:id/discord', (request, response) => {
    
    return response.json([

    ])
})

app.listen(3333)