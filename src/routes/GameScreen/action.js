import {createRoom} from '../../api/game.js'

export default async function action({request}) {
    const formData = await request.formData()
    return await createRoom(formData.get("room-name"), formData.get("room-capacity"))
        .catch(err => {
            return {error: err.response.data.error}
        })
}