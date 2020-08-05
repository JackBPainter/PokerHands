import React from "react";
import completeRank from "../functions/completeRank";

import {
  StyledCardEvalContainer,
  StyledCardEvalTitle,
  StyledCardEvalTextTitle,
  StyledCardEvalContentContainer,
  StyledCardEvalTextContent,
  StyledCardEvalCircle,
} from "./styled/Lib";

const CardEval = ({ handEval }) => {
  return (
    <StyledCardEvalContainer>
      <StyledCardEvalTitle>Pre Flop Evaluation</StyledCardEvalTitle>
      <StyledCardEvalTextTitle>{handEval.title} Rank</StyledCardEvalTextTitle>
      <StyledCardEvalContentContainer>
        <StyledCardEvalCircle>
          <StyledCardEvalTextContent>
            {completeRank(handEval.rank)}
          </StyledCardEvalTextContent>
        </StyledCardEvalCircle>
      </StyledCardEvalContentContainer>
    </StyledCardEvalContainer>
  );
};

export default CardEval;
