import React from "react"
import { StyledCardEvalContainer, StyledCardEvalText } from "./styled/Lib"
 
const CardEval = ({ handEval }) => {
    return (
        <StyledCardEvalContainer>
            <StyledCardEvalText>{handEval.title}</StyledCardEvalText>
            <StyledCardEvalText>{handEval.rank}</StyledCardEvalText>
        </StyledCardEvalContainer>
    )
}

export default CardEval