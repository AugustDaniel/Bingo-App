import {joinRoom} from "../../api/game.js";

export default async function action({request, params}) {
    const formData = await request.formData()
    const playerName = formData.get("player-name")
    const roomId = params.roomId

    return await joinRoom(playerName, roomId)
        .catch(err => {
            return {error: err}
        })
}