import './NumberDrawer.css'
import React, {useEffect, useRef} from "react";
import * as motion from "motion/react-client"

const max = 75
const min = 1
const drawsToDisplay = 5
const intervalDuration = 5000

export default function NumberDrawer({draws, setDraws}) {
    const intervalRef = useRef(null);
    const idRef = useRef(0)

    useEffect(() => {
        if (intervalRef.current) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setDraws((prev) => {
                if (prev.length >= max) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    return prev
                }

                return [drawNumber(prev), ...prev]
            })
        }, intervalDuration)

        return () => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, []);

    const placeHolders = []
    for (let i = 0; i < drawsToDisplay; i++) {
        placeHolders[i] = i
    }

    return (
        <>
            <div className="draw-container">
                {placeHolders.map((cell) => {
                    return (
                        <Draw
                            key={idRef.current++}
                            content={draws.length > cell ? draws[cell] : ''}
                            isFirst={cell === 0}
                            isLast={cell === drawsToDisplay - 1}
                        />
                    )
                })}
            </div>
        </>
    );
}

function Draw({content, isFirst, isLast}) {
    const root = document.querySelector('.draw')
    let translate = -90
    let duration = 1.8

    if (root) {
        const styles = getComputedStyle(root);
        const width = parseFloat(styles.getPropertyValue("--width"));
        const gap = parseFloat(styles.getPropertyValue("--gap"));
        duration = parseFloat(styles.getPropertyValue("--duration"));
        translate = -1 * (width + gap);
    }

    const animations = {
        first: {
            initial: {opacity: 0, x: translate},
            animate: {opacity: 1, x: 0, rotate: 360},
            transition: {duration: duration}
        },
        regular: {
            initial: {x: translate},
            animate: {x: 0, rotate: 360},
            transition: {duration: duration}
        },
        last: {
            initial: {x: translate},
            animate: [
                {x: 0, rotate: 360, transition: {duration: duration}},
                {opacity: 0, transition: {duration: duration, delay: intervalDuration / 1000 - duration}}
            ]
        }
    };

    const selectedAnimation = isLast ? animations.last : isFirst ? animations.first : animations.regular;

    return (
        <motion.div
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
            className={
                `${content ?
                    `draw ${isFirst ? 'draw-first' : ''}` :
                    'invisible'
                }`
            }
        >
            {content}
        </motion.div>
    );
}

function drawNumber(draws) {
    let draw = Math.floor(Math.random() * (max - min + 1)) + min

    while (draws.includes(draw)) {
        draw = Math.floor(Math.random() * (max - min + 1)) + min
    }

    return draw;
}


