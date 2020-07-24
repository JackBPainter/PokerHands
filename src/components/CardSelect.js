import React from "react";

import getCardDeck from "../functions/getCardDeck";
import { CardSelectContainer, StyledCard } from "./styled/Lib";

const CardSelect = ({ setCardSelect, cardSelect, cards, setCards, firstPosition, secondPosition }) => {
  const deck = getCardDeck();

  const onClickHandler = (curr) => {
    setCardSelect(!cardSelect)
    if(firstPosition) {
      setCards([{suit: curr.suit, value: curr.value}, ...cards])
    }
    if(secondPosition) {
      setCards([...cards, {suit: curr.suit, value: curr.value}])
    }
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
