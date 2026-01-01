import NumberDrawer from "../../components/NumberDrawer/NumberDrawer.jsx";
import BingoCard from "../../components/BingoCard/BingoCard.jsx";
import {useEffect, useState} from 'react';
import './PlayScreen.css'
import BingoButton from "../../components/BingoButton/BingoButton.jsx";
import {motion} from "motion/react"
import {useLoaderData} from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket"

export default function PlayScreen() {
    const [draws, setDraws] = useState([])
    const [card, setCard] = useState([[]])
    const [bingo, setBingo] = useState(false)
    const wsURL = useLoaderData()
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        wsURL,
        {
            share: false,
            shouldReconnect: () => true,
        }
    )

    function handleMessage(message) {
        switch (message.type) {
            case "draw":
                setDraws(prevState => [Number(message.message), ...prevState])
                break
            case "card":
                setCard(message.message.card)
                break
            case "valid_bingo":
                setBingo(true)
            case "invalid_bingo":
                console.log(message.message)
            case "bingo":
                console.log(message.message)
            default:
                console.log(message.message)
        }
    }

    function checkForBingo() {
        sendJsonMessage({
            type: "bingo",
            message: "Request bingo check"
        })
    }

    useEffect(() => {
        if (lastJsonMessage != null) {
            handleMessage(lastJsonMessage)
        }
    }, [lastJsonMessage])

    return (
        <>
            <motion.section className={"play-section"}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 2, ease: "easeOut"}}
            >
                <NumberDrawer draws={draws}></NumberDrawer>
                <BingoCard card={card} setCard={setCard}/>
                <BingoButton onClick={checkForBingo}></BingoButton>
            </motion.section>
        </>
    )
}
