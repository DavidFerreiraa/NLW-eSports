import express from 'express'

const app = express();

app.get('/ads', (request, response) => {
    // console.log('Acessou Ads!')
    // O mais correto é retornar um json
    //Hoppescot(Online), insomnia(LocalHost)
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
    ])
})

app.listen(3333)