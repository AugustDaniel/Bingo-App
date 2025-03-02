import NumberDrawer from "./NumberDrawer.jsx";
import BingoCard from "./BingoCard.jsx";
import React, {useState} from 'react';
import {DrawContext} from "./DrawContext.jsx";
import './GameScreen.css'

export default function GameScreen() {
    const [draws, setDraws] = useState([]);

    return (
        <>
            <DrawContext.Provider value={{draws, setDraws}}>
                <section className={"game-section"}>
                    <NumberDrawer></NumberDrawer>
                    <BingoCard></BingoCard>
                </section>
            </DrawContext.Provider>
        </>
    )
}
