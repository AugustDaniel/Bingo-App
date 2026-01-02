import NumberDrawer from "../../components/NumberDrawer/NumberDrawer.jsx";
import BingoCard from "../../components/BingoCard/BingoCard.jsx";
import {useEffect, useState} from 'react';
import './PlayScreen.css'
import BingoButton from "../../components/BingoButton/BingoButton.jsx";
import {motion} from "motion/react"
import {useLoaderData, useNavigate} from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket"
import { useReward } from 'react-rewards';
import {toast} from "react-toastify";

export default function PlayScreen() {
    const [draws, setDraws] = useState([])
    const [card, setCard] = useState([[]])
    const [hasError, setHasError] = useState(false)
    const navigate = useNavigate()
    const wsURL = useLoaderData()
    const { reward, isAnimating } = useReward('bingo-button', 'confetti');
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        wsURL,
        {
            share: false,
            shouldReconnect: () => true,
            onError: () => setHasError(true),
        }
    )

    useEffect(() => {
        if (hasError) {
            //TODO use error toast hook or remove the hook
            toast.error("something went wrong", {position: "top-right"})
            navigate("/game")
        } 
    }, [hasError, navigate])

    function handleMessage(message) {
        switch (message.type) {
            case "draw":
                setDraws(prevState => [Number(message.message), ...prevState])
                break
            case "card":
                setCard(message.message.card)
                break
            case "valid_bingo":
                reward()
                toast.success("You have Bingo!")
                break
            case "invalid_bingo":
                toast.error("Invalid bingo!")
                break
            case "bingo":
                toast.info(`${message.message} has Bingo!`)
                break
            default:
                console.log(message.message)
        }
    }

    function checkForBingo() {
        //TODO send schemas instead of raw data
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
                <BingoButton onClick={checkForBingo} id="bingo-button"></BingoButton>
            </motion.section>
        </>
    )
}
