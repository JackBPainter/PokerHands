import React from 'react';

import { StyledCardContainer, StyledCard, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, cards, firstPosition, setFirstPosition, secondPosition, setSecondPosition }) => {  

  const onClickHandler = (pos) => {
    if(pos === 1) {
      setFirstPosition(true)
    } 
    if(pos === 2) {
      setSecondPosition(true)
    }
    setCardSelect(!cardSelect)
  }

  const replaceBlank = (pos) => {
    let card
    if(pos === 1) {
      card = 0
    }
    if(pos === 2) {
      card = cards.length - 1
    }
    console.log(cards[card])

    if(cards && cards[card].suit === "&diams;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value}>
          &diams; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&hearts;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value}>
          &hearts; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&spades;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value}>
          &spades; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&clubs;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value}>
          &clubs; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
  }

  return (
    <StyledCardContainer>
      {cards && firstPosition === true ? 
        replaceBlank(1) : 
        <StyledBlankCard onClick={() => onClickHandler(1)}>?</StyledBlankCard>
      }
      {cards && secondPosition === true ? 
        replaceBlank(2) : 
        <StyledBlankCard onClick={() => onClickHandler(2)}>?</StyledBlankCard>
      }
    </StyledCardContainer>
  );
};

export default Cards;
