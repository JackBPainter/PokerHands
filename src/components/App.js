import React from 'react';

import Cards from './Cards'
import { StyledBody, StyledTable } from './styled/Lib'

const App = () => {
  return (
    <StyledBody>
      <StyledTable>
        <Cards/>
      </StyledTable>
    </StyledBody>
  );
}

export default App;
