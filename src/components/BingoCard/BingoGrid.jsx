import * as motion from "motion/react-client"

export default function BingoGrid({card, onClick}) {
    function transpose(grid) {
        return grid[0].map((_, rowIndex) => grid.map(col => col[rowIndex]));
    }

    const gridElements = transpose(card).map(column => (
        column.map((cell, index) => (
            <motion.button
                key={cell.id}
                className={`bingo-cell ${cell.scratched ? 'marked' : ''}`}
                onClick={() => onClick(cell.number)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: index * 0.15}}
            >
                {cell.number}
            </motion.button>
        ))
    ))

    return (
        <>
            {gridElements}
        </>
    )
}