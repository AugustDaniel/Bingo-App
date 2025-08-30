import './RoomForm.css'
import {Form} from "react-router-dom";
import StartButton from "../StartButton/StartButton.jsx";

export default function RoomForm() {
    return (
        <section className="room-form">
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
                        type="number"
                        name={"room-capacity"}
                        required
                    />
                </label>
                <StartButton className={"form-button"}>Create</StartButton>
            </Form>
        </section>
    )
}