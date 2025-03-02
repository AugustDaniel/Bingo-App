import NumberDrawer from "./NumberDrawer.jsx";
import BingoCard from "./BingoCard.jsx";
import React, {useState} from 'react';
import {DrawContext} from "./DrawContext.jsx";

export default function GameScreen() {
    const [draws, setDraws] = useState([]);

    return (
        <>
            <DrawContext.Provider value={{draws, setDraws}}>
                <section style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <NumberDrawer></NumberDrawer>
                    <BingoCard></BingoCard>
                </section>
            </DrawContext.Provider>
        </>
    )
}
