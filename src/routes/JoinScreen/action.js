import {joinRoom} from "../../api/game.js";
import {redirect} from "react-router-dom";

export default async function action({request, params}) {
    const formData = await request.formData()
    const playerName = formData.get("player-name")
    const roomId = params.roomId

    try {
        const data = await joinRoom(roomId, playerName)
        sessionStorage.setItem("ws", data.data.websocket_url)
        return redirect("/play")
    } catch (err) {
        return {error: err.response.data.error}
    }
}