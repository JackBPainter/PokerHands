import React, { useState } from "react";

import Cards from "./Cards";
import CardSelect from "./CardSelect";
import { StyledBody, StyledTable } from "./styled/Lib";

const App = () => {
  const [cardSelect, setCardSelect] = useState(false)
  const [card, setCard] = useState()
  const [position, setPosition] = useState()
  
  return (
    <StyledBody>
      {cardSelect === true ? (
        <CardSelect cardSelect={cardSelect} setCardSelect={setCardSelect} card={card} setCard={setCard} />
      ) : (
        <StyledTable>
          <Cards cardSelect={cardSelect} setCardSelect={setCardSelect} card={card} position={position} setPosition={setPosition} />
        </StyledTable>
      )}
    </StyledBody>
  );
};

export default App;
