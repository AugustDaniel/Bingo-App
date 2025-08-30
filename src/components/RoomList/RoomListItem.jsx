import './RoomList.css'
import StartButton from "../StartButton/StartButton.jsx";

export default function RoomListItem({room, onclick}) {
    return (
        <article className={"room-item"}>
            <section className="info">
                <span className={"room-name"}>{room.name}</span>
                <span className={"room-capacity"}>{`${room.player_count}/${room.capacity}`}</span>
            </section>
            <StartButton className={"join-button"} onClick={onclick}>Join</StartButton>
        </article>
    )
}