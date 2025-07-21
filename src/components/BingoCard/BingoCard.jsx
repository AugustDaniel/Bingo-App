import "./BingoCard.css";
import {useState} from "react";
import {createScratchCard} from '../../utils/bingoCardGenerator.js'
import BingoHeader from "./BingoHeader.jsx";
import BingoGrid from "./BingoGrid.jsx";

export default function BingoCard({card, isNumberDrawn}) {
    const [scratchCard, setScratchCard] = useState(() => createScratchCard(card))

    function scratchNum(num) {
        if (!isNumberDrawn(num)) {
            return
        }

        setScratchCard(prevCard => (
            prevCard.map(column => (
                column.map(scratchNum => {
                    if (scratchNum.number === num && !scratchNum.scratched) {
                        return (
                            {
                                ...scratchNum,
                                scratched: true
                            }
                        )
                    }
                    return scratchNum;
                })
            ))
        ))
    }

    return (
        <section className="bingo-card">
            <BingoHeader>BINGO</BingoHeader>
            <BingoGrid card={scratchCard} onClick={scratchNum}/>
        </section>
    )
}





