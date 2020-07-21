export default function getCardDeck() {
    const suits = ["&diams;", "&hearts;", "&spades;", "&clubs;"]
    const values = ['A', "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let deckArr = []
    for(let i = 0; i < suits.length; i++) {
        for(let p = 0; p < values.length; p++) {
            let card = {value: values[p], suit: suits[i]}
            deckArr.push(card)
        }
    }
    return deckArr
}