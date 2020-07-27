import React from 'react';
import renderCard from "../functions/renderCard"

import { StyledCardContainer, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect, firstCard, secondCard, firstPosition, setFirstPosition, secondPosition, setSecondPosition, bothSelected }) => {  
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
    <StyledCardContainer bothSelected={bothSelected}>
      {firstPosition === true || firstCard ? 
        renderCard(firstCard, onClickHandler, firstPos) : 
        <StyledBlankCard onClick={() => onClickHandler(firstPos)}>?</StyledBlankCard>
      }
      {secondPosition === true || secondCard ? 
        renderCard(secondCard, onClickHandler, secondPos) : 
        <StyledBlankCard onClick={() => onClickHandler(secondPos)}>?</StyledBlankCard>
      }
    </StyledCardContainer>
  );
};

export default Cards;
