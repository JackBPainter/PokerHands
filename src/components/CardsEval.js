import React from "react"
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
                    <StyledCardEvalTextContent>{handEval.rank}</StyledCardEvalTextContent>
                </StyledCardEvalText>
            </StyledCardEvalTextContainer>
        </StyledCardEvalContainer>
    )
}

export default CardEval