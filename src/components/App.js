import React, { useState } from "react";

import Cards from "./Cards";
import CardSelect from "./CardSelect";
import { StyledBody, StyledTable } from "./styled/Lib";

const App = () => {
  const [cardSelect, setCardSelect] = useState(false)
  const [cards, setCards] = useState([])
  const [firstPosition, setFirstPosition] = useState(false)
  const [secondPosition, setSecondPosition] = useState(false)

  return (
    <StyledBody>
      {cardSelect === true ? (
        <CardSelect 
          cardSelect={cardSelect} 
          setCardSelect={setCardSelect} 
          cards={cards} 
          setCards={setCards} 
          firstPosition={firstPosition}
          secondPosition={secondPosition}
        />
      ) : (
        <StyledTable>
          <Cards 
            cardSelect={cardSelect} 
            setCardSelect={setCardSelect} 
            cards={cards} 
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
