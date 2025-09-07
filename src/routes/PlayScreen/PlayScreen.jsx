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

    function handleMessage(event) {
        switch (event.type) {
            case "draw":
                setDraws(prevState => [Number(event.number), ...prevState])
                break
            case "card":
                console.log("Received card:", event.message);
                setCard(event.card)
                break
            default:
                console.log(event.message)
        }
    }

    useEffect(() => {
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data)
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
                <BingoCard card={card} isNumberDrawn={(num) => isNumberDrawn(draws, num)}/>
                <BingoButton></BingoButton>
            </motion.section>
        </>
    )
}
