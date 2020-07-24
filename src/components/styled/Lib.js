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
    height: 100px;
    margin: 0 auto;
`

export const StyledCard = styled.div`
  position: relative;
  background: white;
  border: solid black 3px;
  border-radius: 10%;
  margin: 2px;
  height: ${({ selected }) => selected ? "100px" : ""};  
  width: ${({ selected }) => selected ? "70px" : ""};
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
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
  cursor: pointer;
`

// CardSelect.js

export const CardSelectContainer = styled.main`
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(13, 1fr);
    background-image: url(${felt});
    width: 500px;
    height: 300px;
    border-radius: 2%;
    border: 2px solid black
`
