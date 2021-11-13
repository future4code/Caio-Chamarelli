import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: LightGray;
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
    border-radius: 50px;
    background: linear-gradient(to right, blueviolet, purple, blueviolet);
    color: orange;
    border: 1.5px solid purple
`

const LikeButtonContainer = styled.button`
    border-radius: 50px;
    background: linear-gradient(to right, green, lightgreen, green);
    color: gray;
    border: 2px black
`

const DislikeButtonContainer = styled.button`
    border-radius: 50px;
    background: linear-gradient(to right, red, orange, red);
    color: gray;
    border: 1.5px red
`

const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  background-color: lightgray;

`





const TelaInicial = (props) => {

    const [perfil, setPerfil] = useState({})

    

     const getProfile = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiom/person`

        )
        .then((response) => {
          setPerfil(response.data.profile)
        })
        .catch((err) => {
          console.log(err)
        })
     }

    useEffect(() => {
      document.title = "AstroMatch"
      getProfile()
    }, []);

    const likePerson = () => {

      const  body= {
            "id": perfil.id,
            "choice": true
        }

        axios.post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiom/choose-person`, body)
      .then((res) => {
          if(res.data.isMatch){
              alert(`${perfil.name} deu match`)
          }
          getProfile()
      })
      .catch((err) => {
          alert(err)
      })
    }

    const dislikePerson = () => {

    const  body = {
            "id": perfil.id,
            "choice": false
        }


        axios.post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiom/choose-person`, body)
      .then((res) => {
          getProfile()
      })
      .catch((err) => {
          alert(err)
      })
    }

    return (
        <AppContainer>
                <h2>AstroMatch</h2>
                <ButtonContainer onClick={props.irParaTelaMatch}>Trocar de Página</ButtonContainer>
                <p>{perfil.name}</p>
                <ProfileImg src={perfil.photo} alt={perfil.name}></ProfileImg>
                <p>{perfil.bio}</p>
                <p>{perfil.age}</p>

                <DivButton>
                <DislikeButtonContainer onClick={dislikePerson}>Dislike</DislikeButtonContainer>
                <LikeButtonContainer onClick={likePerson}>Like</LikeButtonContainer>
                </DivButton>                 
        </AppContainer>
    )
}

export default TelaInicial
