import React from "react";

import getCardDeck from "../functions/getCardDeck";
import { CardSelectContainer, CardSelectTable, StyledCard } from "./styled/Lib";

const CardSelect = ({ setCardSelect, cardSelect, card, setCard }) => {
  const deck = getCardDeck();

  const onClickHandler = (curr) => {
    setCardSelect(!cardSelect)
    setCard([curr.suit, curr.value])
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
