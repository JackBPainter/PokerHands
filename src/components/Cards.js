import React, { useState } from "react";

import { StyledCardContainer, StyledCard, StyledBlankCard } from "./styled/Lib";

const Cards = () => {
  const [cardSelect, setCardSelect] = useState(false)

  return (
    <StyledCardContainer>
      <StyledBlankCard>?</StyledBlankCard>
      <StyledBlankCard>?</StyledBlankCard>
    </StyledCardContainer>
  );
};

export default Cards;
