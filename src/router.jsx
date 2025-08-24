import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    });

export default router;