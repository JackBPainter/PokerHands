import React from "react"
import valueCheck from "./valueCheck"

import { StyledCard } from "../components/styled/Lib"

export default function renderCard(card, onClickHandler, pos) {
    if(card && card.suit === "&diams;") {
        return (
          <StyledCard selected={true} suit={card.suit} key={card.suit + card.value} onClick={() => onClickHandler(pos)}>
            &diams; <p>{valueCheck(card.value)}</p>
          </StyledCard>
        )
      }
      if(card && card.suit === "&hearts;") {
        return (
          <StyledCard selected={true} suit={card.suit} key={card.suit + card.value} onClick={() => onClickHandler(pos)}>
            &hearts; <p>{valueCheck(card.value)}</p>
          </StyledCard>
        )
      }
      if(card && card.suit === "&spades;") {
        return (
          <StyledCard selected={true} suit={card.suit} key={card.suit + card.value} onClick={() => onClickHandler(pos)}>
            &spades; <p>{valueCheck(card.value)}</p>
          </StyledCard>
        )
      }
      if(card && card.suit === "&clubs;") {
        return (
          <StyledCard selected={true} suit={card.suit} key={card.suit + card.value} onClick={() => onClickHandler(pos)}>
            &clubs; <p>{valueCheck(card.value)}</p>
          </StyledCard>
        )
      }
}