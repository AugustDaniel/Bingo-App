import {getWebSocketURL} from "../../api/play.js";

export default async function loader() {
    const joinURL = sessionStorage.getItem("ws")
    return getWebSocketURL(joinURL)
}