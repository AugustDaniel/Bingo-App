import api from './api.js'

function getGame() {
    return api.get("/game")
}