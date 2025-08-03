import {generateBingoCard} from "../utils/bingoCardUtils.js"
import NumberDrawer from "./NumberDrawer/NumberDrawer.jsx";
import BingoCard from "./BingoCard/BingoCard.jsx";
import {useState} from 'react';
import './GameScreen.css'
import BingoButton from "./BingoButton.jsx";

export default function GameScreen() {
    const [draws, setDraws] = useState([]);
    const [card, setCard] = useState(() => generateBingoCard())

    function isNumberDrawn(num) {
        return draws.includes(num) || num === 'Free'
    }

    return (
        <>
            <section className={"game-section"}>
                <NumberDrawer draws={draws} setDraws={setDraws}></NumberDrawer>
                <BingoCard card={card} isNumberDrawn={isNumberDrawn}/>
                <BingoButton></BingoButton>
            </section>
        </>
    )
}
