import './JoinScreen.css'
import {Form, useActionData} from "react-router-dom";
import StartButton from "../../components/StartButton/StartButton.jsx";
import useErrorToast from "../../hooks/useErrorToast.jsx";

export default function JoinScreen() {
    const actionData = useActionData()
    const errorMessage = actionData?.error
    useErrorToast(errorMessage)

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