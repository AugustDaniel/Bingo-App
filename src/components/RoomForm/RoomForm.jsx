import './RoomForm.css'
import {Form} from "react-router-dom";

export default function RoomForm(props) {
    return (
        <>
            <h2>Create a room</h2>
            <Form method="post" id="create-form">
                <label htmlFor="room-name">
                    <span>name</span>
                    <input
                        type="text"
                        name={"room-name"}
                    />
                </label>
                <label htmlFor="room-capacity">
                    <span>capacity</span>
                    <input
                        type="text"
                        name={"room-capacity"}
                    />
                </label>
                <button>Create</button>
            </Form>
        </>
    )
}