import React from "react"

import getCardDeck from "../functions/getCardDeck"
import { CardSelectContainer, StyledCard } from "./styled/Lib"
import { findAllByDisplayValue } from "@testing-library/react";

const CardSelect = ({ setCardSelect, cardSelect, setFirstCard, setSecondCard, firstPosition, setFirstPosition, secondPosition, setSecondPosition }) => {
  const deck = getCardDeck();

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
    <CardSelectContainer>
      {deck.map((curr, index) => {
        if (curr.suit === "&diams;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => onClickHandler(curr)}>
              &diams; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&hearts;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => onClickHandler(curr)}>
              &hearts; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&spades;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => onClickHandler(curr)}>
                &spades; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&clubs;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => onClickHandler(curr)}>
              &clubs; <p>{curr.value}</p>
            </StyledCard>
          );
        }
      })}
    </CardSelectContainer>
  )
}

export default CardSelect;
