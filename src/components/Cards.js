import React from 'react';

import { StyledCardContainer, StyledCard, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, card, position, setPosition }) => {
  const onClickHandler = (pos) => {
    setPosition(pos) 
    setCardSelect(!cardSelect)
  }

  const replaceBlank = (props) => {
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
  }

  return (
    <StyledCardContainer>
      {card ? 
        replaceBlank() : 
        <StyledBlankCard onClick={() => onClickHandler(1)}>?</StyledBlankCard>
      }
      {card ? 
        replaceBlank() : 
        <StyledBlankCard onClick={() => onClickHandler(2)}>?</StyledBlankCard>
      }
    </StyledCardContainer>
  );
};

export default Cards;
