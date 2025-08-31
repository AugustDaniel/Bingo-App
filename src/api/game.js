import api from './api.js'

export function getGame() {
    return api.get("/game")
}

export function createRoom(roomName, roomCapacity) {
    return api.post("/game/rooms", {
        name: roomName,
        capacity: roomCapacity
    })
}

export function joinRoom(roomId, playerName) {
    return api.post(`/game/rooms/${roomId}/payers`, {
        name: playerName
    })
}