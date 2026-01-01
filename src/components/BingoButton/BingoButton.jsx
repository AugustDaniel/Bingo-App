import './BingoButton.css'
import {useState} from "react";

export default function BingoButton({onClick}) {
    return (
        <>
            <button
                className={"bingo-button"}
                onClick={onClick}
            >
                Bingo!
            </button>
        </>
    )
}