import {createBrowserRouter} from "react-router-dom";
import StartScreen from "./StartScreen/StartScreen.jsx";
import PlayScreen from "./PlayScreen/PlayScreen.jsx";
import GameScreen from "./GameScreen/GameScreen.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <StartScreen/>,
        },
        {
            path: "/play",
            element: <PlayScreen/>
        },
        {
            path: "/game",
            element: <GameScreen/>
        }
    ],
    {
        basename: import.meta.env.BASE_URL,
    });

export default router;