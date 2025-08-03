function generateBingoCard() {
    const grid = []

    for (let i = 0; i < 5; i++) {
        const columnNumbers = new Set()
        const columns = []
        let min = i * 15 + 1
        let max = min + 14

        while (columnNumbers.size < 5) {
            columnNumbers.add(
                Math.floor(Math.random() * (max - min + 1)) + min)
        }

        columnNumbers.forEach(num => columns.push(num))
        grid.push(columns)
    }

    grid[2][2] = 'Free'

    return grid
}

function createScratchCard(card) {
    let counter = 0
    return card.map(column => (
        column.map(number => (
            {
                id: counter++,
                number,
                scratched: false
            }
        ))
    ))
}

function drawNumber(draws, min, max) {
    let draw = Math.floor(Math.random() * (max - min + 1)) + min

    while (draws.includes(draw)) {
        draw = Math.floor(Math.random() * (max - min + 1)) + min
    }

    return draw;
}

export { generateBingoCard, createScratchCard, drawNumber }