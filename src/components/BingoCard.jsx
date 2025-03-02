import React, {useState} from "react";
import "./BingoCard.css";
import {useDrawContext} from "./DrawContext.jsx";
import * as motion from "motion/react-client"

function generateBingoCard() {
    const letters = ["B", "I", "N", "G", "O"]
    const grid = []

    for (let i = 0; i < 5; i++) {
        let columnNumbers = new Set()
        let min = i * 15 + 1
        let max = min + 14

        while (columnNumbers.size < 5) {
            columnNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min)
        }

        grid.push([letters[i], ...columnNumbers])
    }

    grid[2][3] = "Free"

    return grid
}

export default function BingoCard() {
    const [card] = useState(generateBingoCard())

    return (
        <div className="bingo-card">
            {card.map((row) => (
                <BingoRow key={row[0]} row={row}/>
            ))}
        </div>
    )
}

function BingoRow({row}) {
    return (
        <div className="bingo-row">
            {row.map((cell, idx) =>
                idx === 0 ? <BingoHeader key={cell} content={cell}></BingoHeader> :
                    <BingoCell key={cell} index={idx} content={cell}></BingoCell>)}
        </div>
    )
}

function BingoHeader({content}) {
    return <div className={"bingo-cell bingo-header"}>{content}</div>
}

function BingoCell({content, index}) {
    const {draws} = useDrawContext()
    const [scratched, setScratched] = React.useState(false)

    function onClick() {
        if (draws.includes(content) || content === "Free") {
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
            {content}
        </motion.button>
    );
}





