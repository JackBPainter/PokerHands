import React from "react"
import completeRank from "../functions/completeRank"

import { StyledCardEvalContainer, StyledCardEvalTitle, StyledCardEvalTextContainer, StyledCardEvalText, StyledCardEvalTextTitle, StyledCardEvalTextContent } from "./styled/Lib"
 
const CardEval = ({ handEval }) => {
    return (
        <StyledCardEvalContainer>
            <StyledCardEvalTitle>Pre Flop Evaluation</StyledCardEvalTitle>
            <StyledCardEvalTextContainer>
                <StyledCardEvalText>
                    <StyledCardEvalTextTitle>Hand Title:</StyledCardEvalTextTitle>
                    <StyledCardEvalTextContent>{handEval.title}</StyledCardEvalTextContent>
                </StyledCardEvalText>
                <StyledCardEvalText>
                    <StyledCardEvalTextTitle>Hand Rank:</StyledCardEvalTextTitle>
                    <StyledCardEvalTextContent>{completeRank(handEval.rank)}</StyledCardEvalTextContent>
                </StyledCardEvalText>
            </StyledCardEvalTextContainer>
        </StyledCardEvalContainer>
    )
}

export default CardEval