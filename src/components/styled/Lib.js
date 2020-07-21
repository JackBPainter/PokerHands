import styled from "styled-components"

// App.js

export const StyledBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  background: RGB(136, 176, 75);
  height: 100vh;
`

export const StyledTable = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkgreen;
  height: 480px;
  width: 280px;
  border: solid black 5px;
  border-radius: 50%;
`

// Cards.js

export const StyledCardContainer = styled.main`
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 0 auto;
`

export const StyledCard = styled.div`
  background: white;
  border: solid black 3px;
  border-radius: 10%;
  height: 100px;
  width: 70px; 
`

export const StyledBlankCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
  border: solid black 3px;
  border-radius: 10%;
  height: 100px;
  width: 70px; 
  font-size: 40px;
  font-weight: bold;
`

// CardSelect.js

export const CardSelectContainer = styled.main`
    height: 100vh;
`