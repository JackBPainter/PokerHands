import React, { useState, useEffect } from "react";
import getHandEval from "../functions/getHandEval"

import Cards from "./Cards";
import CardSelect from "./CardSelect";
import CardsEval from "./CardsEval"
import { StyledBody, StyledTable } from "./styled/Lib";

const App = () => {
  const [cardSelect, setCardSelect] = useState(false)
  const [firstCard, setFirstCard] = useState()
  const [secondCard, setSecondCard] = useState()
  const [firstPosition, setFirstPosition] = useState(false)
  const [secondPosition, setSecondPosition] = useState(false)
  const [bothSelected, setBothSelected] = useState(false)
  const [handEval, setHandEval] = useState()

  useEffect(() => {
    if(firstCard !== undefined && secondCard !== undefined) {
      setBothSelected(true)
      setHandEval(getHandEval(firstCard, secondCard))
    }
  }, [firstCard, secondCard])
  
  return (
    <StyledBody>
      {cardSelect === true && bothSelected === false ? (
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
      ) : cardSelect === false && bothSelected === false ? (
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
            bothSelected={bothSelected}
          />
        </StyledTable>
      ) : cardSelect === false && bothSelected === true ? (
        <StyledTable>
        <CardsEval handEval={handEval} />
          <Cards 
            cardSelect={cardSelect} 
            setCardSelect={setCardSelect} 
            firstCard={firstCard} 
            secondCard={secondCard} 
            firstPosition={firstPosition} 
            setFirstPosition={setFirstPosition} 
            secondPosition={secondPosition}
            setSecondPosition={setSecondPosition} 
            bothSelected={bothSelected}
          />
        </StyledTable>
      ) : ""}
    </StyledBody>
  );
};

export default App;
