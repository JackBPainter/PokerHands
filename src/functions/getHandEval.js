import { STRAIGHTS } from "../utils"

const straightMatch = (firstCard, secondCard, handEval) => {
    const regex = /10/gm
}

const flushMatch = (firstCard, secondCard, handEval) => {
    if(firstCard.suit === secondCard.suit) {
        handEval.rank = "Flush Draw"
    }
}

export default function getHandEval(firstCard, secondCard) {
    let handEval = {}
}