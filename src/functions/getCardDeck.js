import { VALUES, SUITS } from "../utils"

export default function getCardDeck() {
    let deckArr = []
    for(let i = 0; i < SUITS.length; i++) {
        for(let p = 0; p < VALUES.length; p++) {
            let card = {value: VALUES[p], suit: SUITS[i]}
            deckArr.push(card)
        }
    }
    return deckArr
}