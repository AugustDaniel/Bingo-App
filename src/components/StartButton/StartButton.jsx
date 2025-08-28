import './StartButton.module.css'

export default function StartButton(props) {
    return (
        <button>
            {props.children}
        </button>
    )
}