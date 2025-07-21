export default function BingoHeader({children}) {
    const headerElements = children.split('').map((letter, index) => (
        <div key={index} className={"bingo-cell bingo-header"}>{letter}</div>
    ))

    return (
        <>
            {headerElements}
        </>
    )
}