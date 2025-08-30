import './StartButton.css'

export default function StartButton({children, className= "", ...props}) {
    return (
        <button className={`start-button ${className}`} {...props}>
            {children}
        </button>
    )
}