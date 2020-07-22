import React from "react";

import getCardDeck from "../functions/getCardDeck";
import { StyledCard } from "../components/styled/Lib";

export default function renderCardDeck() {
  const deck = getCardDeck();
  return deck.map((curr, index) => {
    if (curr.suit === "&diams;") {
      return (
        <StyledCard suit={curr.suit}>
          &diams; <p>{curr.value}</p>
        </StyledCard>
      );
    }
    if (curr.suit === "&hearts;") {
      return (
        <StyledCard suit={curr.suit}>
          &hearts; <p>{curr.value}</p>
        </StyledCard>
      );
    }
    if (curr.suit === "&spades;") {
      return (
        <StyledCard suit={curr.suit}>
            &spades; <p>{curr.value}</p>
        </StyledCard>
      );
    }
    if (curr.suit === "&clubs;") {
      return (
        <StyledCard suit={curr.suit}>
          &clubs; <p>{curr.value}</p>
        </StyledCard>
      );
    }
  });
}
