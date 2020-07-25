import React from "react"
import getCardDeck from "./getCardDeck"

import { StyledCard } from "../components/styled/Lib"

export default function renderCardDeck(onClickHandler) {
    return getCardDeck().map((curr) => {
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
      })
}