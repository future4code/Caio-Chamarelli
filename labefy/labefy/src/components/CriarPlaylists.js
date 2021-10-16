import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components"

const Main = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: black;
background-image: url(http://waterbearlearning.com/wp-content/uploads/2019/10/water_bear_learning_video_music3.jpg);

button {
    display:flex;
    margin: auto;
    margin-top: 40px;
    padding: 15px;
    width: 130px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, green, gold, red);
    color: white;
}
`

const Header = styled.header`
height: 90px;
display: flex;
font-size: 25px;
align-items: center;
text-align: center;
justify-content: center;
color: black;
top:0;
left: 0;
background-image: linear-gradient(to left, green, gold, red);

img {
    height: 68px;
    margin: 0 12px;
}
`

const Footer = styled.footer`
margin-top: -9px;
text-align: center;
background-image: linear-gradient(to left, green, gold, red);
color:black;

`



export default class CriarPlaylists extends React.Component {

    state = {
        nome: ""
    }

    handleNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "caio-chamarelli-banu"
            }
        })
            .then((res) => {
                Swal.fire("Playlist criada!", "Curta suas músicas!!!", 'success')
                this.setState({ nome: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }

    render() {
        return (
            <div>
                <Header>
                    <img src="/img/skull.png" />
                    <h2>Labefy</h2>

                </Header>

                <Main>
                    {/* <img src="/img/Music2.jpg" /> */}
                    <h2>Bem vindo, Crie sua playlist aqui</h2>
                    <input
                        placeholder={"Nome-da-Playlist"}
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                    <button onClick={this.criarPlaylist}>Criar Playlist</button>
                    <button onClick={this.props.irParaLista}>Ir para Lista de Playlist</button>
                </Main>
                <Footer>Todos os direitos reservados. Desenvolvido por Caio Chamarelli, Turma Banu, 2021.</Footer>
            </div>
        )
    }
}
