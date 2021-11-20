import React, { useState } from 'react';
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import Match from "./Components/TelaMatch/Match";
import axios from 'axios';
import styled from 'styled-components';


const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 50px;
`

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;

`

const App = (props) => {
 const [telaBase, setTelaBase] = useState(1);

 const onChangeTela = () => {
  switch (telaBase) {
    case 1:
      return <TelaInicial irParaTelaMatch={irParaTelaMatch} />
    case 2:
      return <Match irParaTelaInicial={irParaTelaInicial} />
    default:
      return "Página não encontrada!"
  }
}

const clearMatches = () => {
  axios.put (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:caio/clear`)
  .then((res) => {
     alert("Lista resetada")
  })
  .catch((err) => {
      alert(err)
  })
}

const irParaTelaMatch = () => {
  setTelaBase(2)
  console.log("Estou clicando")
}

const irParaTelaInicial = () => {
  setTelaBase(1)
}



  return <div>
   
    {onChangeTela()} 
    <DivButton>  
    <ButtonContainer onClick={clearMatches}>Limpar Matches</ButtonContainer>
    </DivButton>
    </div>
  
}

export default App

