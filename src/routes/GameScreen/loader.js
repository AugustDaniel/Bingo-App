import {getGame} from "../../api/game.js";

export default async function loader() {
    const rooms = await getGame().then(response => response.data.rooms);
    return {rooms}
}