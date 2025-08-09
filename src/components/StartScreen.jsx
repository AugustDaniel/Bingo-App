import { motion } from "motion/react"
import './StartScreen.css'

export default function StartScreen({setPressed}) {

    return (
        <>
            <motion.section className={"start-section"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1>Let's play Bingo!</h1>
                <button onClick={() => setPressed(true)}>
                    Start
                </button>
            </motion.section>
        </>
    )
}