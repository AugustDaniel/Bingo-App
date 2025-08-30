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
                        id="room-name"
                        type="text"
                        name={"room-name"}
                        required
                    />
                </label>
                <label htmlFor="room-capacity">
                    <span>capacity</span>
                    <input
                        id="room-capacity"
                        type="text"
                        name={"room-capacity"}
                        required
                    />
                </label>
                <button type={"submit"}>Create</button>
            </Form>
        </>
    )
}