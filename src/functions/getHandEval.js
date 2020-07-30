import { STRAIGHTS } from "../utils"

const getStraightRank = (firstVal, secondVal) => {
    const newArr = STRAIGHTS.map(str => str.split(""))
    let result = []
    for(let i = 0; i < newArr.length - 1; i++) {
        if(newArr[i].includes(firstVal) && newArr[i].includes(secondVal)) {
            result.push(newArr[i].join(""))
        }
    }
    return arr.indexOf(result[0]) + 1
}

getStraight("T", "9",["AKQJT", "KQJT9", "QJT98", "JT987", "T9876", "98765", "87654", "76543", "65432", "5432A"])
const flushMatch = (firstCard, secondCard, handEval) => {
    if(firstCard.suit === secondCard.suit) {
        handEval.rank = "Flush Draw"
    }
}

export default function getHandEval(firstCard, secondCard) {
    let handEval = {}
}