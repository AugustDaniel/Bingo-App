import * as motion from "motion/react-client"


export default function StartScreen({setPressed}) {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1>Let's play Bingo!</h1>
                <button onClick={() => setPressed(true)}>
                    Start
                </button>
            </motion.div>
        </>
    )
}