export default function BingoHeader({children}) {
    const headerElements = children.split('').map((letter, index) => (
        <div key={index} className={"bingo-header-cell"}>{letter}</div>
    ))

    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${children.length}, 1fr)`
    }

    return (
        <>
            <section style={layoutStyle} className={"bingo-header"}>
                {headerElements}
            </section>
        </>
    )
}