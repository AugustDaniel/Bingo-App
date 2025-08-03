import {generateBingoCard} from "../utils/bingoCardGenerator.js"
import NumberDrawer from "./NumberDrawer/NumberDrawer.jsx";
import BingoCard from "./BingoCard/BingoCard.jsx";
import {useState} from 'react';
import './GameScreen.css'
import BingoButton from "./BingoButton.jsx";
import {isNumberDrawn} from "../utils/bingoUtils.js";

export default function GameScreen() {
    const [draws, setDraws] = useState([]);
    const [card, setCard] = useState(() => generateBingoCard())

    return (
        <>
            <section className={"game-section"}>
                <NumberDrawer draws={draws} setDraws={setDraws}></NumberDrawer>
                <BingoCard card={card} isNumberDrawn={(num) => isNumberDrawn(draws, num)}/>
                <BingoButton></BingoButton>
            </section>
        </>
    )
}
