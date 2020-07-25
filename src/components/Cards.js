import React from 'react';

import { StyledCardContainer, StyledCard, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, cards, firstPosition, setFirstPosition, secondPosition, setSecondPosition }) => {  
  let firstPos = 1
  let secondPos = 2
  let card 

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


    if(cards && cards[card].suit === "&diams;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value} onClick={() => onClickHandler(firstPos)}>
          &diams; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&hearts;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value} onClick={() => onClickHandler(firstPos)}>
          &hearts; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&spades;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value} onClick={() => onClickHandler(firstPos)}>
          &spades; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
    if(cards && cards[card].suit === "&clubs;") {
      return (
        <StyledCard selected={true} suit={cards[card].suit} key={cards[card].suit + cards[card].value} onClick={() => onClickHandler(firstPos)}>
          &clubs; <p>{cards[card].value}</p>
        </StyledCard>
      )
    }
  }

  return (
    <StyledCardContainer>
      {cards && firstPosition === true ? 
        replaceBlank(firstPos) : 
        <StyledBlankCard onClick={() => onClickHandler(firstPos)}>?</StyledBlankCard>
      }
      {cards && secondPosition === true ? 
        replaceBlank(secondPos) : 
        <StyledBlankCard onClick={() => onClickHandler(secondPos)}>?</StyledBlankCard>
      }
    </StyledCardContainer>
  );
};

export default Cards;
