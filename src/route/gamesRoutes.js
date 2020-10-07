const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")
const cors = require("cors")


router.get("/jogos", cors(), controller.getGames)
router.get("/jogos/:id", cors(), controller.gamesbyId)

module.exports = router