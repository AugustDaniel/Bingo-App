import React, {useState} from "react";
import "./BingoCard.css";
import {useDrawContext} from "./DrawContext.jsx";
import * as motion from "motion/react-client"

export default function BingoCard({card, setCard}) {
    return (
        <div className="bingo-card">
            {card.map((row) => {
                return (
                    <div key={row[0]} className="bingo-row">
                        {row.map((cell, idx) =>
                            idx === 0 ? <BingoHeader key={cell} content={cell}></BingoHeader> :
                                <BingoCell key={cell.number} index={idx} content={cell} setCard={setCard}></BingoCell>)}
                    </div>
                )
            })}
        </div>
    )
}

function BingoHeader({content}) {
    return <div className={"bingo-cell bingo-header"}>{content}</div>
}

function BingoCell({content, index, setCard}) {
    const {draws} = useDrawContext()
    const [scratched, setScratched] = React.useState(false)

    function onClick() {
        if (draws.includes(content.number) || content.number === "Free") {
            setScratched(true);
        }
    }

    return (
        <motion.button
            className={`bingo-cell ${scratched ? 'marked' : ''}`}
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: index * 0.15}}
        >
            {content.number}
        </motion.button>
    );
}





