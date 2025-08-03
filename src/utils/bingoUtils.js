function drawNumber(draws, min, max) {
    let draw = Math.floor(Math.random() * (max - min + 1)) + min

    while (draws.includes(draw)) {
        draw = Math.floor(Math.random() * (max - min + 1)) + min
    }

    return draw;
}

function checkForBingo(draws, card) {
    //TODO
}

function isNumberDrawn(draws, num) {
    return draws.includes(num) || num === 'Free'
}

export { drawNumber, checkForBingo, isNumberDrawn };