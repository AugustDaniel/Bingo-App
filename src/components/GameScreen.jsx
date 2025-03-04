import NumberDrawer from "./NumberDrawer.jsx";
import BingoCard from "./BingoCard.jsx";
import React, {useState} from 'react';
import {DrawContext} from "./DrawContext.jsx";
import './GameScreen.css'

export default function GameScreen() {
    const [draws, setDraws] = useState([]);
    const [bingoCard, setBingoCard] = useState(generateBingoCard())

    return (
        <>
            <DrawContext.Provider value={{draws, setDraws}}>
                <section className={"game-section"}>
                    <NumberDrawer></NumberDrawer>
                    <BingoCard card={bingoCard} setCard={setBingoCard} draws={draws}></BingoCard>
                </section>
            </DrawContext.Provider>
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
