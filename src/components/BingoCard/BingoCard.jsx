import "./BingoCard.css";
import BingoHeader from "./BingoHeader.jsx";
import BingoGrid from "./BingoGrid.jsx";

export default function BingoCard({card, setCard}) {
    function scratchNum(num) {
        setCard(prevCard => (
            prevCard.map(column => (
                column.map(scratchNum => {
                    console.log("looking")
                    if (scratchNum.content === num && !scratchNum.scratched) {
                        console.log("num found")
                        return (
                            {
                                ...scratchNum,
                                scratched: true
                            }
                        )
                    }
                    console.log(prevCard)
                    return scratchNum;
                })
            ))
        ))
    }

    return (
        <section className="bingo-card">
            <BingoHeader>BINGO</BingoHeader>
            <BingoGrid card={card} onClick={scratchNum}/>
        </section>
    )
}





