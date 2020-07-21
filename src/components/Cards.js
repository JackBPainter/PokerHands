import React, { useState } from 'react';

import { StyledCardContainer, StyledCard, StyledBlankCard } from './styled/Lib';

const Cards = ({ setCardSelect, cardSelect }) => {
  console.log(cardSelect)

  return (
    <StyledCardContainer>
      <StyledBlankCard onClick={() => setCardSelect(!cardSelect)}>?</StyledBlankCard>
      <StyledBlankCard onClick={() => setCardSelect(!cardSelect)}>?</StyledBlankCard>
    </StyledCardContainer>
  );
};

export default Cards;
