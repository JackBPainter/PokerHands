import { VALUES, STRAIGHTS, HIGH, PAIR, STRAIGHT, FLUSH, STRAIGHTFLUSH, ROYALFLUSH } from "../utils"

const getPair = (firstCard, secondCard) => {
    if(firstCard.value === secondCard.value) {
        let rank = STRAIGHTS.indexOf(firstCard.value) + 1
        return {rank, title: PAIR}
    } else {
        return false
    }
}

const getStraight = (firstCard, secondCard) => {
    const newArr = STRAIGHTS.map(str => str.split(""))
    let result = []
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i].includes(firstCard.value) && newArr[i].includes(secondCard.value)) {
            result.push(newArr[i].join(""))
        }
    }
    let rank = arr.indexOf(result[0]) + 1
    if(result) {
        return {rank, title: STRAIGHT}
    } else {
        return false
    }
}

const getFlush = (firstCard, secondCard) => {
    if(firstCard.suit === secondCard.suit) {
        let rank = firstCard.value > secondCard.value ? VALUES.indexOf(firstCard) + 1 : VALUES.indexOf(secondCard) + 1
        return {rank, title: FLUSH}
    } else {
        return false
    }
}

export default function getHandEval(firstCard, secondCard) {

}
