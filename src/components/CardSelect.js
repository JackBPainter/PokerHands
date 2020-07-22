import React from 'react'

import renderCardDeck from '../functions/renderCardDeck'
import { CardSelectContainer, StyledCard } from './styled/Lib';

const CardSelect = () => {
    return (
        <CardSelectContainer>
            {renderCardDeck()}
        </CardSelectContainer>
    )
}

export default CardSelect