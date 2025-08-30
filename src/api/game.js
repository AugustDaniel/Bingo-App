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