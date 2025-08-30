import {createRoom} from '../../api/game.js'

export default async function action({request}) {
    await createRoom(request)
}