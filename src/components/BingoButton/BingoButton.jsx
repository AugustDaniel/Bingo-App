import './BingoButton.css'
import {useState} from "react";

export default function BingoButton(props) {
    return (
        <>
            <button
                {...props}
                className={"bingo-button"}
            >
                Bingo!
            </button>
        </>
    )
}