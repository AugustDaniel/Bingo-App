export default function BingoGrid({card, onClick}) {
    function transpose(grid) {
        return grid[0].map((_, rowIndex) => grid.map(col => col[rowIndex]));
    }

    const gridElements = transpose(card).map(column => (
        column.map(cell => (
            <button
                key={cell.id}
                className={`bingo-cell ${cell.scratched ? 'marked' : ''}`}
                onClick={() => onClick(cell.number)}
            >
                {cell.number}
            </button>
        ))
    ))

    return (
        <>
            {gridElements}
        </>
    )
}