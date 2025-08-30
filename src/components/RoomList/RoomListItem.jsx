import './RoomList.css'
import StartButton from "../StartButton/StartButton.jsx";
import {useNavigate} from "react-router-dom";

export default function RoomListItem({room}) {
    const navigate = useNavigate();

    function handleJoin() {
        navigate(`/game/${room.room_id}`)
    }

    return (
        <article className={"room-item"}>
            <section className="info">
                <span className={"room-name"}>Name: {room.name}</span>
                <span className={"room-capacity"}>Capacity: {`${room.player_count}/${room.capacity}`}</span>
            </section>
            <StartButton className={"join-button"} onClick={handleJoin}>Join</StartButton>
        </article>
    )
}