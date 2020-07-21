import React, { useState } from "react";

import Cards from "./Cards";
import CardSelect from "./CardSelect";
import { StyledBody, StyledTable } from "./styled/Lib";

const App = () => {
  const [cardSelect, setCardSelect] = useState(false);

  return (
    <StyledBody>
      {cardSelect === true ? (
        <CardSelect />
      ) : (
        <StyledTable>
          <Cards cardSelect={cardSelect} setCardSelect={setCardSelect} />
        </StyledTable>
      )}
    </StyledBody>
  );
};

export default App;
