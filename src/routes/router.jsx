import {createBrowserRouter} from "react-router-dom";
import StartScreen from "./StartScreen/StartScreen.jsx";
import PlayScreen from "./PlayScreen/PlayScreen.jsx";
import GameScreen from "./GameScreen/GameScreen.jsx";
import gameLoader from "./GameScreen/loader.js";
import gameAction from "./GameScreen/action.js";
import JoinScreen from "./JoinScreen/JoinScreen.jsx";
import joinAction from "./JoinScreen/action.js";

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
            element: <GameScreen/>,
            loader: gameLoader,
            action: gameAction,
        },
        {
            path: "/game/:roomId",
            element: <JoinScreen/>,
            action: joinAction
        }
    ],
    {
        basename: import.meta.env.BASE_URL,
    });

export default router;