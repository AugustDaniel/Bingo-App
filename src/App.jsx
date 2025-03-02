import {useState} from 'react'
import './App.css'
import StartScreen from "./components/StartScreen.jsx";
import GameScreen from "./components/GameScreen.jsx";

function App() {
    const [pressed, setPressed] = useState(false)

    return (
        <>
            {pressed ?
                <GameScreen></GameScreen> :
                <StartScreen setPressed={setPressed}></StartScreen>}
        </>
    )
}

export default App
