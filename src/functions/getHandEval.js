import { STRAIGHTS } from "../utils"

const getPair = (firstVal, secondVal) => {
    if(firstVal === secondVal) {
        let rank = STRAIGHTS.indexOf(firstVal) + 1
        return {rank, title: "Pair"}
    }
}

const getStraight = (firstCardVal, secondCardVal) => {
    const newArr = STRAIGHTS.map(str => str.split(""))
    let result = []
    for(let i = 0; i < newArr.length - 1; i++) {
        if(newArr[i].includes(firstVal) && newArr[i].includes(secondVal)) {
            result.push(newArr[i].join(""))
        }
    }
    let rank = arr.indexOf(result[0]) + 1
    if(result) {
        return {rank, title: "Straight Draw"}
    }
}

const getFlush = (firstCardSuit, secondCardSuit, handEval) => {
    if(firstCardSuit === secondCardSuit) {
        return "Flush Draw"
    }
}

export default function getHandEval(firstCard, secondCard) {
    let handEval = {}

}
