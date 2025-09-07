export default function BingoGrid({card, onClick}) {
    function transpose(grid) {
        return grid[0].map((_, rowIndex) => grid.map(col => col[rowIndex]));
    }

    const gridElements = transpose(card).map((column, columnIndex) => (
        column.map((cell, cellIndex) => (
            <button
                key={columnIndex * 10 + cellIndex}
                className={`bingo-cell ${cell.scratched ? 'marked' : ''}`}
                onClick={() => onClick(cell.content)}
            >
                {cell.content}
            </button>
        ))
    ))

    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${card.length}, 1fr)`,
        gridTemplateRows: `repeat(${card[0].length}, 1fr)`,
    }

    return (
        <>
            <section style={layoutStyle} className={"bingo-grid"}>
                {gridElements}
            </section>
        </>
    )
}