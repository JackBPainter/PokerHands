import React from "react";

import getCardDeck from "../functions/getCardDeck";
import { CardSelectContainer, CardSelectTable, StyledCard } from "./styled/Lib";

const CardSelect = ({ setCardSelect, cardSelect }) => {
  const deck = getCardDeck();

  return (
    <CardSelectContainer>
      {deck.map((curr, index) => {
        if (curr.suit === "&diams;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => setCardSelect(!cardSelect)}>
              &diams; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&hearts;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => setCardSelect(!cardSelect)}>
              &hearts; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&spades;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => setCardSelect(!cardSelect)}>
                &spades; <p>{curr.value}</p>
            </StyledCard>
          )
        }
        if (curr.suit === "&clubs;") {
          return (
            <StyledCard suit={curr.suit} key={curr.value + curr.suit} onClick={() => setCardSelect(!cardSelect)}>
              &clubs; <p>{curr.value}</p>
            </StyledCard>
          );
        }
      })}
    </CardSelectContainer>
  )
}

export default CardSelect;
