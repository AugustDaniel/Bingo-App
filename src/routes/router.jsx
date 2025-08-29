import {createBrowserRouter} from "react-router-dom";
import StartScreen from "./StartScreen/StartScreen.jsx";
import PlayScreen from "./PlayScreen/PlayScreen.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <StartScreen/>,
        },
        {
            path: "/play",
            element: <PlayScreen/>
        }
    ],
    {
        basename: import.meta.env.BASE_URL,
    });

export default router;