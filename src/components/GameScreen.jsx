import {generateBingoCard} from "../utils/bingoCardGenerator.js"
import NumberDrawer from "./NumberDrawer/NumberDrawer.jsx";
import BingoCard from "./BingoCard/BingoCard.jsx";
import {useState} from 'react';
import './GameScreen.css'
import BingoButton from "./BingoButton.jsx";
import {isNumberDrawn} from "../utils/bingoUtils.js";
import * as motion from "motion/react-client"

export default function GameScreen() {
    const [draws, setDraws] = useState([]);
    const [card, setCard] = useState(() => generateBingoCard())

    return (
        <>
            <motion.section className={"game-section"}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 2, ease: "easeOut"}}
            >
                <NumberDrawer draws={draws} setDraws={setDraws}></NumberDrawer>
                <BingoCard card={card} isNumberDrawn={(num) => isNumberDrawn(draws, num)}/>
                <BingoButton></BingoButton>
            </motion.section>
        </>
    )
}
