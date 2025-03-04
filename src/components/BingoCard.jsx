import "./BingoCard.css";
import * as motion from "motion/react-client"

export default function BingoCard({card, setCard, draws}) {
    function onClick(content) {
        if (draws.includes(content.number) || content.number === "Free") {
            // find on number
        }
    }

    return (
        <div className="bingo-card">
            {card.map((row) => {
                return (
                    <div key={row[0]} className="bingo-row">
                        {row.map((cell, idx) =>
                            idx === 0 ? <BingoHeader key={cell} content={cell}></BingoHeader> :
                                <BingoCell key={cell.number} index={idx} content={cell} setCard={setCard} onClick={onClick}></BingoCell>)}
                    </div>
                )
            })}
        </div>
    )
}

function BingoHeader({content}) {
    return <div className={"bingo-cell bingo-header"}>{content}</div>
}

function BingoCell({content, index, onClick}) {
    return (
        <motion.button
            className={`bingo-cell ${content.scratched ? 'marked' : ''}`}
            onClick={() => onClick(content)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: index * 0.15}}
        >
            {content.number}
        </motion.button>
    );
}





