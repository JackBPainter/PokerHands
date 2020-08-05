import React from "react";
import completeRank from "../functions/completeRank";

import {
  StyledCardEvalContainer,
  StyledCardEvalTitle,
  StyledCardEvalTextContainer,
  StyledCardEvalText,
  StyledCardEvalTextTitle,
  StyledCardEvalTextContent,
} from "./styled/Lib";

const CardEval = ({ handEval }) => {
  return (
    <StyledCardEvalContainer>
      <StyledCardEvalTitle>Pre Flop Evaluation</StyledCardEvalTitle>
      <StyledCardEvalTextTitle>{handEval.title} Rank</StyledCardEvalTextTitle>
      <StyledCardEvalTextContent>
        {completeRank(handEval.rank)}
      </StyledCardEvalTextContent>
    </StyledCardEvalContainer>
  );
};

export default CardEval;
