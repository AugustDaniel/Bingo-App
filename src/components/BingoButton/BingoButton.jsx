import './BingoButton.css'
import {useState} from "react";
import Confetti from 'react-confetti'

export default function BingoButton() {
    const [pressed, setPressed] = useState(false);

    function handleClick() {
        if (pressed) {
            return
        }

        setPressed(true);
    }

    return (
        <>
            {
                pressed && <Confetti/>
            }
            <button
                className={"bingo-button"}
                onClick={handleClick}
            >
                Bingo!
            </button>
        </>
    )
}