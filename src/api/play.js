import api from './api.js'

let socket = null;

export function getWebSocket(joinURL) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        return socket;
    }

    const baseURL = api.defaults.baseURL
    socket = new WebSocket(`ws${baseURL.replace(/^http/, "")}${joinURL}`)
    return socket
}

