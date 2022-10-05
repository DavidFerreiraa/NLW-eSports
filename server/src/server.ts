import express from 'express'

const app = express();

/**
 * Query: .../ads?...
 * Route: .../ads/5... - Identificador
 * Body: ... - Envio de formulários e informações sensíveis
 */

app.get('/games', (request, response) => {
    return response.json([

    ])
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