import styled from 'styled-components'

import felt from '../../felt.jpg'

// App.js

export const StyledBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  background: RGB(136, 176, 75);
  height: 100vh;
`

export const StyledTable = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${({ bothSelected }) => bothSelected ? "" : "center"};
  background: darkgreen;
  height: 480px;
  width: 280px;
  border: solid black 5px;
  border-radius: 50%;
`

// Cards.js

export const StyledCardContainer = styled.main`
  position: ${({ bothSelected }) => bothSelected ? "absolute" : ""};
  display: flex;
  justify-content: space-between;
  width: 160px;
  height: 100px;
  margin: 0 auto;
  bottom: ${({ bothSelected }) => bothSelected ? "50px" : ""};
`

export const StyledCard = styled.div`
  background: white;
  border: solid black 3px;
  border-radius: 10%;
  margin: 2px;
  height: ${({ selected }) => selected ? "100px" : ""};  
  width: ${({ selected }) => selected ? "70px" : ""};
  color: ${({ suit }) => suit === "&hearts;" || suit === "&diams;" ? "red" : "black"};
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ selected }) => selected ? "60%" : "50%"};
    font-size: ${({ selected }) => selected ? "20px" : "16px"};
  }
`

export const StyledBlankCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
  border: solid black 3px;
  border-radius: 10%;
  margin: 2px;
  height: 100px;
  width: 70px; 
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`

// CardSelect.js

export const CardSelectContainer = styled.main`
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(13, 1fr);
    background-image: url(${felt});
    width: 700px;
    height: 325px;
    border-radius: 2%;
    border: 2px solid black
`
