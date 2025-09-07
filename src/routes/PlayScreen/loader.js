import {getWebSocket} from "../../api/play.js";

export default async function loader() {
    const joinURL = sessionStorage.getItem("ws")

    try {
        const ws = await getWebSocket(joinURL)
        ws.onerror = (error) => {
            console.error("WebSocket error:", error)
        }

        ws.onclose = () => {
            console.log("WebSocket connection closed")}
        return ws
    } catch (err) {
        return {error: err.response.data.error}
    }
}