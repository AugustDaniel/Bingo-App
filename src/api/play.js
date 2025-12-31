import api from './api.js'

let socket = null;

export function getWebSocketURL(joinURL) {
    const baseURL = api.defaults.baseURL
    return (`ws${baseURL.replace(/^http/, "")}${joinURL}`)
}

