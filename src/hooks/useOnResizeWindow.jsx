import {useEffect, useRef} from "react";

export default function useOnResizeWindow(func) {
    const windowRef = useRef({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            windowRef.current = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            func()
        }

        window.addEventListener('resize', handleResize);
    }, [windowRef, func])
}