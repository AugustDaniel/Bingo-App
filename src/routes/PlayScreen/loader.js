import {getWebSocket} from "../../api/play.js";

export default async function loader() {
    const joinURL = sessionStorage.getItem("ws")

    try {
        return await getWebSocket(joinURL)
    } catch (err) {
        return {error: err.response.data.error}
    }
}