import './StartButton.css'

export default function StartButton(props) {
    return (
        <button className={"start-button"}>
            {props.children}
        </button>
    )
}