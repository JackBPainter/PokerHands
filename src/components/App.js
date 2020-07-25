import React, { useState } from "react";

import Cards from "./Cards";
import CardSelect from "./CardSelect";
import { StyledBody, StyledTable } from "./styled/Lib";

const App = () => {
  const [cardSelect, setCardSelect] = useState(false)
  const [firstCard, setFirstCard] = useState()
  const [secondCard, setSecondCard] = useState()
  const [firstPosition, setFirstPosition] = useState(false)
  const [secondPosition, setSecondPosition] = useState(false)

  console.log(firstCard)
  console.log(secondCard)

  return (
    <StyledBody>
      {cardSelect === true ? (
        <CardSelect 
          cardSelect={cardSelect} 
          setCardSelect={setCardSelect} 
          setFirstCard={setFirstCard} 
          setSecondCard={setSecondCard} 
          firstPosition={firstPosition}
          setFirstPosition={setFirstPosition}
          secondPosition={secondPosition}
          setSecondPosition={setSecondPosition}
        />
      ) : (
        <StyledTable>
          <Cards 
            cardSelect={cardSelect} 
            setCardSelect={setCardSelect} 
            firstCard={firstCard} 
            secondCard={secondCard} 
            firstPosition={firstPosition} 
            setFirstPosition={setFirstPosition} 
            secondPosition={secondPosition}
            setSecondPosition={setSecondPosition} 
          />
        </StyledTable>
      )}
    </StyledBody>
  );
};

export default App;
