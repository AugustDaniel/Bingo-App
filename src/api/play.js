import api from './api.js'

export function getWebSocket(joinURL) {
    const baseURL = api.defaults.baseURL
    return new WebSocket(`ws${baseURL.replace(/^http/, "")}${joinURL}`)
}

