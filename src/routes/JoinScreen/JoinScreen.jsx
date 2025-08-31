import './JoinScreen.css'
import {Form, useActionData, useNavigate} from "react-router-dom";
import StartButton from "../../components/StartButton/StartButton.jsx";
import useErrorToast from "../../hooks/useErrorToast.jsx";
import {useEffect} from "react";

export default function JoinScreen() {
    const actionData = useActionData()
    const navigate = useNavigate();
    const errorMessage = actionData?.error
    useErrorToast(errorMessage)

    useEffect(() => {
        if (errorMessage) {
            navigate("/game")
        }
    }, [errorMessage, navigate]);

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