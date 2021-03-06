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
  flex-direction: column;
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

export const StyledCardSelectContainer = styled.main`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(13, 1fr);
  background-image: url(${felt});
  width: 700px;
  height: 325px;
  border-radius: 2%;
  border: 2px solid black;
`

// CardsEval.js

export const StyledCardEvalContainer = styled.main`
  height: 160px;
  width: 190px;
  background: white;
  border-radius: 10% 10% 4% 4%;
  border: solid black 3px;
  margin-bottom: 5px;
`

export const StyledCardEvalTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100%;
  border-bottom: solid black 2px;
  font-weight: bold;
  font-size: 20px;
`

export const StyledCardEvalTextTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  margin-top: 5px;
  font-weight: bold;
`

export const StyledCardEvalContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
  `

export const StyledCardEvalTextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 22px;
  font-weight: bold;
`

export const StyledCardEvalCircle = styled.div`
  display: flex;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: 5px solid black;
`


