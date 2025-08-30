import './JoinScreen.css'
import {Form, useParams} from "react-router-dom";
import StartButton from "../../components/StartButton/StartButton.jsx";

export default function JoinScreen() {
    const roomId = useParams()

    return (
        <section className="player-name-section">
            <h1>Please enter your name</h1>
            <Form method="post" className={"player-name-form"}>
                <input type="text" name={"player-name"}/>
                <StartButton>
                    Confirm
                </StartButton>
            </Form>
        </section>
    )
}