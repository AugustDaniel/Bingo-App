import './GameScreen.css'
import RoomList from "../../components/RoomList/RoomList.jsx";
import {useLoaderData} from "react-router-dom";
import RoomForm from "../../components/RoomForm/RoomForm.jsx";

export default function GameScreen() {
    const loaderData = useLoaderData();
    const rooms = loaderData.rooms

    return (
        <>
            {
                rooms.length === 0 ? (
                    <p> No rooms available</p>
                ) : (
                    <RoomList>
                        <RoomList.Item room={{name: "k"}}/>
                    </RoomList>
                )
            }

            <RoomForm/>
        </>
    )
}