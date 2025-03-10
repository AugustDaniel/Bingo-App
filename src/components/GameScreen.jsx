import NumberDrawer from "./NumberDrawer.jsx";
import BingoCard from "./BingoCard.jsx";
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

function generateBingoCard() {
    const letters = ["B", "I", "N", "G", "O"]
    const grid = []

    for (let i = 0; i < 5; i++) {
        const columnNumbers = new Set()
        const columns = []
        let min = i * 15 + 1
        let max = min + 14

        while (columnNumbers.size < 5) {
            columnNumbers.add(
                Math.floor(Math.random() * (max - min + 1)) + min)
        }

        columnNumbers.forEach((num) => {
            columns.push({
                number: num,
                scratched: false
            })
        })

        grid.push([letters[i], ...columns])
    }

    grid[2][3] = {number: "Free", scratched: false}

    return grid
}
