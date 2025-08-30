import './GameScreen.css'
import RoomList from "../../components/RoomList/RoomList.jsx";
import {useActionData, useLoaderData} from "react-router-dom";
import RoomForm from "../../components/RoomForm/RoomForm.jsx";
import RoomListItem from "../../components/RoomList/RoomListItem.jsx";
import useErrorToast from "../../hooks/useErrorToast.jsx";

export default function GameScreen() {
    const loaderData = useLoaderData()
    const actionData = useActionData()

    const rooms = loaderData.rooms

    const informationText = rooms.length === 0
        ? "No rooms available"
        : "Rooms"

    const roomListItems = rooms.map((room) => (
        <RoomListItem room={room} key={room.room_id}/>
    ))

    const errorMessage = actionData?.error || loaderData?.error;
    useErrorToast(errorMessage)

    return (
        <>
            <h2 className={"information"}>
                {informationText}
            </h2>

            <section className="rooms">
                <RoomList>
                    {roomListItems}
                </RoomList>

                <RoomForm/>
            </section>
        </>
    )
}