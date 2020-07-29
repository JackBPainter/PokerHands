import React from "react"

import renderCardDeck from "../functions/renderCardDeck"
import { StyledCardSelectContainer, StyledCard } from "./styled/Lib"

const CardSelect = ({ setCardSelect, cardSelect, setFirstCard, setSecondCard, firstPosition, setFirstPosition, secondPosition, setSecondPosition }) => {
  const onClickHandler = (curr) => {
    if(firstPosition) {
      setFirstCard({suit: curr.suit, value: curr.value})
      setFirstPosition(false)
    }
    if(secondPosition) {
      setSecondCard({suit: curr.suit, value: curr.value})
      setSecondPosition(false)
    }
    setCardSelect(!cardSelect)
  }

  return (
    <StyledCardSelectContainer>
      {renderCardDeck(onClickHandler)}
    </StyledCardSelectContainer>
  )
}

export default CardSelect;
