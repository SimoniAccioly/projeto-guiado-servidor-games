const games = require("../model/games.json")


const novaLista = games.map(games => {
    const novoJogo = {
        id: games.id,
        nome: games.name,
        genero: games.genre,
        platformas: games.platforms,
        capa: games.cover
    }
    return novoJogo
})

const getGames = (request, response) => {
    response.status(200).send(novaLista)
}


const listaId = games.map(games => {
    const novaLista = {
        id: games.id,
        nome: games.name,
        genero: games.genre,
        platformas: games.platforms,
        data_lancamento: games.first_release_date,
        slug: games.slug,
        resumo: games.summary,
        empresa: games.company,
        capa: games.cover
    }
    return novaLista
})


const gamesbyId = (request, response) => {
    const id = request.params.id
    const games = listaId.find(item => item.id == id)
    if (games) {
        response.status(200).send(games)
    } else {
        response.status(404).send("Música não encontrada!")
    }
}


module.exports = {
    getGames,
    gamesbyId
}