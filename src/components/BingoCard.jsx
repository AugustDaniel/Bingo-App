import "./BingoCard.css";
import * as motion from "motion/react-client"

export default function BingoCard({card, setCard, draws}) {
    function onClick(content, index, rowIndex) {
        if (draws.includes(content.number) || content.number === "Free") {
            const copy = [...card]
            copy[rowIndex][index] = {number: content.number, scratched: true}
            setCard(copy)
        }
    }

    return (
        <div className="bingo-card">
            {card.map((row, rowIndex) => {
                return (
                    <div key={row[0]} className="bingo-row">
                        {row.map((cell, idx) =>
                            idx === 0 ? <BingoHeader key={cell} content={cell}></BingoHeader> :
                                <BingoCell
                                    key={cell.number}
                                    index={idx}
                                    rowIndex={rowIndex}
                                    content={cell}
                                    setCard={setCard}
                                    onClick={onClick}>
                                </BingoCell>)}
                    </div>
                )
            })}
        </div>
    )
}

function BingoHeader({content}) {
    return <div className={"bingo-cell bingo-header"}>{content}</div>
}

function BingoCell({content, index, rowIndex, onClick}) {
    return (
        <motion.button
            className={`bingo-cell ${content.scratched ? 'marked' : ''}`}
            onClick={() => onClick(content, index, rowIndex)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: index * 0.15}}
        >
            {content.number}
        </motion.button>
    );
}





