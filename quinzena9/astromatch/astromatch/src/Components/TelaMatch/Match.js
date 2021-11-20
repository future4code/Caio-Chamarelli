import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: LightGray;
  padding: 10px 15px;
`
const ProfileImg = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 0;
    box-shadow: 0px 0px 5px 8px rgba(0, 0, 0, 0.2);
`

const ButtonContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50px;
    background: linear-gradient(to right, blueviolet, purple, blueviolet);
    color: orange;
    border: 1.5px solid purple
`

 const Name = styled.h2`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    border-radius: 50px;
    color: orange;
    background: linear-gradient(to right, blueviolet, purple, blueviolet);
    border: 1.5px solid purple
 `


const Match = (props) => {
    const [listaMatch, setListaMatch] = useState([])


    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:caio/matches`)
        .then((res) => {
            setListaMatch(res.data.matches)
        })
        .catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        document.title = "AstroMatch"
        getMatches()
    }, [])

    return (
            <AppContainer>
            <h2>Lista</h2>
            <ButtonContainer onClick={props.irParaTelaInicial}>Voltar</ButtonContainer>
            {listaMatch.map((match) => {
            return (
            <div>
                <ProfileImg src={match.photo} alt={match.name}></ProfileImg>
                <Name>{match.name}</Name>
            </div>
      )})
    }
        </AppContainer>
    )
}

export default Match
