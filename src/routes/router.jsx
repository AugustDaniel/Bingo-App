import {createBrowserRouter} from "react-router-dom";
import StartScreen from "./StartScreen/StartScreen.jsx";
import GameScreen from "./GameScreen/GameScreen.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <StartScreen/>,
        },
        {
            path: "/play",
            element: <GameScreen/>
        }
    ],
    {
        basename: import.meta.env.BASE_URL,
    });

export default router;