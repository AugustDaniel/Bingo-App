import './NumberDrawer.css'
import {useDrawContext} from "./DrawContext.jsx";
import React, {useEffect, useRef} from "react";
import * as motion from "motion/react-client"

const max = 75
const min = 1
const drawsToDisplay = 6;

export default function NumberDrawer() {
    const {draws, setDraws} = useDrawContext();
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
        }, 5000)

        return () => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, []);


    return (
        <>
            <div className="draw-container">
                {draws.slice(0, drawsToDisplay).map((draw, index) => (
                    <Draw key={idRef.current++} content={draw} isFirst={index === 0} isLast={index === drawsToDisplay - 1}/>
                ))}
            </div>
        </>
    );
}

function Draw({content, isFirst, isLast}) {
    const root = document.querySelector('.draw')
    let translate = -90

    if (root) {
        const styles = getComputedStyle(root);
        const width = parseFloat(styles.getPropertyValue("--width"));
        const gap = parseFloat(styles.getPropertyValue("--gap"));
        translate = -1 * (width + gap);
    }

    console.log(translate)

    const animations = {
        first: {
            initial: {opacity: 0, x: translate},
            animate: {opacity: 1, x: 0, rotate: 360},
            transition: {duration: 0.8}
        },
        last: {
            initial: {opacity: 1, x: translate},
            animate: {opacity: 0, x:0, rotate: 360},
            transition: {duration: 0.8}
        },
        regular: {
            initial: {x: translate},
            animate: {x: 0, rotate: 360},
            transition: {duration: 0.8}
        },
    };

    const selectedAnimation = isFirst ? animations.first : isLast ? animations.last : animations.regular;

    return (
        <motion.p
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
            className={`draw ${isFirst ? 'draw-first' : ''}`}
        >
            {content}
        </motion.p>
    );
}

function drawNumber(draws) {
    let draw = Math.floor(Math.random() * (max - min + 1)) + min

    while (draws.includes(draw)) {
        draw = Math.floor(Math.random() * (max - min + 1)) + min
    }

    return draw;
}


