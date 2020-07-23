import React, { useState } from 'react';

import { StyledCardContainer, StyledCard, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, card }) => {

  const replaceBlank = () => {
    if(card && card.suit === "&diams;") {
      return (
        <StyledCard card={card} suit={card.suit} key={card.suit + card.value}>
          &diams; <p>{card.value}</p>
        </StyledCard>
      )
    }
    if(card && card.suit === "&hearts;") {
      return (
        <StyledCard card={card} suit={card.suit} key={card.suit + card.value}>
          &hearts; <p>{card.value}</p>
        </StyledCard>
      )
    }
    if(card && card.suit === "&spades;") {
      return (
        <StyledCard card={card} suit={card.suit} key={card.suit + card.value}>
          &spades; <p>{card.value}</p>
        </StyledCard>
      )
    }
    if(card && card.suit === "&clubs;") {
      return (
        <StyledCard card={card} suit={card.suit} key={card.suit + card.value}>
          &clubs; <p>{card.value}</p>
        </StyledCard>
      )
    }
    return <StyledBlankCard onClick={() => setCardSelect(!cardSelect)}>?</StyledBlankCard>
  }

  return (
    <StyledCardContainer>
      {
        replaceBlank()
      }
      {
        replaceBlank()
      }
    </StyledCardContainer>
  );
};

export default Cards;
