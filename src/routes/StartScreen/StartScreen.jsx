import {Link} from "react-router-dom"
import {motion} from "motion/react"
import './StartScreen.module.css'

export default function StartScreen() {

    return (
        <>
            <motion.section className={"start-section"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
            >
                <h1>Let's play Bingo!</h1>
                <button>
                    <Link to={'play'}>Start</Link>
                </button>
            </motion.section>
        </>
    )
}