import NumberDrawer from "../../components/NumberDrawer/NumberDrawer.jsx";
import BingoCard from "../../components/BingoCard/BingoCard.jsx";
import {useEffect, useState} from 'react';
import './PlayScreen.css'
import BingoButton from "../../components/BingoButton/BingoButton.jsx";
import {isNumberDrawn} from "../../utils/bingoUtils.js";
import {motion} from "motion/react"
import {useLoaderData} from "react-router-dom";

export default function PlayScreen() {
    const [draws, setDraws] = useState([]);
    const [card, setCard] = useState([[]])
    const ws = useLoaderData()

    function handleMessage(message) {
        switch (message.type) {
            case "draw":
                console.log(message.message)
                setDraws(prevState => [Number(message.message), ...prevState])
                break
            case "card":
                setCard(message.message.card)
                break
            default:
                console.log(message.message)
        }
    }

    useEffect(() => {
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log("Received message", message)
            handleMessage(message)
        }
    }, [ws])

    return (
        <>
            <motion.section className={"play-section"}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 2, ease: "easeOut"}}
            >
                <NumberDrawer draws={draws} setDraws={setDraws}></NumberDrawer>
                <BingoCard card={card} setCard={setCard} isNumberDrawn={(num) => isNumberDrawn(draws, num)}/>
                <BingoButton></BingoButton>
            </motion.section>
        </>
    )
}
