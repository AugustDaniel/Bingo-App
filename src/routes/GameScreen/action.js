import {createRoom} from '../../api/game.js'

export default async function action({request}) {
    const formData = await request.formData()
    await createRoom(formData.get("room-name"), formData.get("room-capacity"))
}