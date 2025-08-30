import './RoomList.css'
import RoomListItem from './RoomListItem.jsx'

export default function RoomList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

RoomList.Item = RoomListItem