import './GameScreen.css'
import RoomList from "../../components/RoomList/RoomList.jsx";
import {useLoaderData} from "react-router-dom";

export default function GameScreen() {
    const rooms = useLoaderData()

    console.log(rooms)

    return (
       <RoomList>
           <RoomList.Item room={{name: "k"}}/>
       </RoomList>
    )
}