import './GameScreen.css'
import RoomList from "../../components/RoomList/RoomList.jsx";
import {useLoaderData} from "react-router-dom";
import RoomForm from "../../components/RoomForm/RoomForm.jsx";
import RoomListItem from "../../components/RoomList/RoomListItem.jsx";

export default function GameScreen() {
    const loaderData = useLoaderData()
    const rooms = loaderData.rooms

    const informationText = rooms.length === 0
        ? "No rooms available"
        : "Rooms"

    const roomListItems = rooms.map((room) => (
        <RoomListItem name={room.name} key={room.room_id}/>
    ))

    return (
        <>
            <h2 className={"information"}>
                {informationText}
            </h2>

            <RoomList>
                {roomListItems}
            </RoomList>

            <RoomForm/>
        </>
    )
}