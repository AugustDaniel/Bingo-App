import * as motion from "motion/react-client";
import React from "react";

export default function Draw({content, isFirst, isLast, config}) {
    const animations = {
        first: {
            initial: {opacity: 0, x: config.translate},
            animate: {opacity: 1, x: 0, rotate: 360},
            transition: {duration: config.duration}
        },
        regular: {
            initial: {x: config.translate},
            animate: {x: 0, rotate: 360},
            transition: {duration: config.duration}
        },
        last: {
            initial: {x: config.translate},
            animate: [
                {x: 0, rotate: 360, transition: {duration: config.duration}},
                {
                    opacity: 0,
                    transition: {duration: config.duration, delay: config.intervalDuration / 1000 - config.duration}
                }
            ]
        }
    };

    const selectedAnimation = isLast ? animations.last : isFirst ? animations.first : animations.regular;

    function getBingoColor() {
        if (content >= 1 && content <= 15) {
            return 'blue';
        } else if (content >= 16 && content <= 30) {
            return 'red';
        } else if (content >= 31 && content <= 45) {
            return 'white';
        } else if (content >= 46 && content <= 60) {
            return 'green';
        } else if (content >= 61 && content <= 75) {
            return 'yellow';
        }
    }

    function getBingoLetter() {
        if (content >= 1 && content <= 15) {
            return 'B';
        } else if (content >= 16 && content <= 30) {
            return 'I';
        } else if (content >= 31 && content <= 45) {
            return 'N';
        } else if (content >= 46 && content <= 60) {
            return 'G';
        } else if (content >= 61 && content <= 75) {
            return 'O';
        }
    }

    const bingoStyling = {
        backgroundColor: getBingoColor()
    }

    return (
        <motion.div
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
            style={bingoStyling}
            className={
                `${content ?
                    `draw ${isFirst ? 'draw-first' : ''}` :
                    'invisible'
                }`
            }
        >
            <span className={"draw-letter"}>{getBingoLetter()}</span>
            <span>{content}</span>
        </motion.div>
    );
}