import './NumberDrawer.css'
import { useRef } from "react";
import Draw from "./Draw.jsx";
import useOnResizeWindow from "../../hooks/useOnResizeWindow.jsx";

export default function NumberDrawer({draws, setDraws}) {
    const drawsToDisplay = 5
    const maxDraws = 75
    const intervalDuration = 5000
    const elementRef = useRef(null);

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

    return (
        <div className="draw-container" ref={elementRef}>
            {Array.from({length: drawsToDisplay}).map((_, index) => {
                // Always display {drawToDisplay} draws, to ensure correct animation
                const draw = draws[index];
                return (
                    <Draw
                        key={`${draw}-${index}-${draws.length}`}
                        config={configRef.current}
                        content={draw ?? ''}
                        isFirst={index === 0}
                        isLast={index === drawsToDisplay - 1}
                        drawsDone={draws.length == maxDraws}
                    />
                );
            })}
        </div>
    );
}