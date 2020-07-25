import React from 'react';
import renderCardDeck from "../functions/renderCardDeck"

import { StyledCardContainer, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, firstCard, secondCard, firstPosition, setFirstPosition, secondPosition, setSecondPosition }) => {  
  let firstPos = 1
  let secondPos = 2

  const onClickHandler = (pos) => {
    if(pos === 1) {
      setFirstPosition(true)
    } 
    if(pos === 2) {
      setSecondPosition(true)
    }
    setCardSelect(!cardSelect)
  }

  return (
    <StyledCardContainer>
      {firstPosition === true || firstCard ? 
        renderCardDeck(firstCard, onClickHandler, firstPos) : 
        <StyledBlankCard onClick={() => onClickHandler(firstPos)}>?</StyledBlankCard>
      }
      {secondPosition === true || secondCard ? 
        renderCardDeck(secondCard, onClickHandler, secondPos) : 
        <StyledBlankCard onClick={() => onClickHandler(secondPos)}>?</StyledBlankCard>
      }
    </StyledCardContainer>
  );
};

export default Cards;
