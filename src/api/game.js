import api from './api.js'

export function getGame() {
    return api.get("/game")
}