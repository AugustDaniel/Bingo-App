import './GameScreen.css'
import RoomList from "../../components/RoomList/RoomList.jsx";
import {Form, useLoaderData} from "react-router-dom";
import {useState} from "react";
import RoomForm from "../../components/RoomForm/RoomForm.jsx";

export default function GameScreen() {
    const loaderData = useLoaderData();
    const [rooms, setRooms] = useState(loaderData.rooms);

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