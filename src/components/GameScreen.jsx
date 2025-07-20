import generateBingoCard from "../utils/bingoCardGenerator.js"
import NumberDrawer from "./NumberDrawer.jsx";
import BingoCard from "./BingoCard/BingoCard.jsx";
import React, {useRef, useState} from 'react';
import './GameScreen.css'
import BingoButton from "./BingoButton.jsx";

export default function GameScreen() {
    const [draws, setDraws] = useState([]);
    const cardRef = useRef(generateBingoCard())

    return (
        <>
            <section className={"game-section"}>
                <NumberDrawer draws={draws} setDraws={setDraws}></NumberDrawer>
                <BingoCard card={cardRef} draws={draws}></BingoCard>
                <BingoButton></BingoButton>
            </section>
        </>
    )
}
