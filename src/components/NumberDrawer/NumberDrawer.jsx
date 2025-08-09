import './NumberDrawer.css'
import React, {useEffect, useRef} from "react";
import {drawNumber} from "../../utils/bingoUtils.js"
import Draw from "./Draw.jsx";
import useOnResizeWindow from "../../hooks/useOnResizeWindow.jsx";

export default function NumberDrawer({draws, setDraws}) {
    const max = 75
    const min = 1
    const drawsToDisplay = 5
    const intervalDuration = 5000

    const intervalRef = useRef(null);
    const elementRef = useRef(null);
    const idRef = useRef(0) // needed to ensure wanted render behavior

    const configRef = useRef({
        translate: -90, // Default value
        duration: 1.8, // Default value
        intervalDuration
    })

    // Initialize the config state with values from CSS variables
    useOnResizeWindow(() => {
        function changeConfig() {
            if (!elementRef.current) {
                return;
            }

            const styles = getComputedStyle(elementRef.current);
            const width = parseFloat(styles.getPropertyValue("--width"));
            const gap = parseFloat(styles.getPropertyValue("--gap"));
            const duration = parseFloat(styles.getPropertyValue("--duration"));
            const translate = -1 * (width + gap);

            configRef.current = {
                ...configRef.current,
                duration,
                translate
            }
        }

        changeConfig();
    })

    // Start the interval to draw numbers
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

                return [drawNumber(prev, min, max), ...prev]
            })
        }, intervalDuration)

        return () => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, []);

    return (
        <div className="draw-container" ref={elementRef}>
            {Array.from({length: drawsToDisplay}).map((_, index) => {
                // Always display {drawToDisplay} draws, to ensure correct animation
                const draw = draws[index];
                return (
                    <Draw
                        key={idRef.current++}
                        config={configRef.current}
                        content={draw ?? ''}
                        isFirst={index === 0}
                        isLast={index === drawsToDisplay - 1}
                    />
                );
            })}
        </div>
    );
}