import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
background-image: linear-gradient(to left, black, gold, black);
border-bottom: 2px solid #05df05;

img {
    height: 68px;
    margin: 0 12px;
}
`

const Main = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: black;
background-image: url(http://waterbearlearning.com/wp-content/uploads/2019/10/water_bear_learning_video_music3.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;

button {
    width: 150px;
    margin-left: 12px;
    font-size: 15px;
    border-radius:15px;
    border: 1px solid #05df05;
    height: 40px;
    background-image: linear-gradient(to left, black, gold, black);
    color: black;
}
`

const DivInputsButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 20vh;
width: 80vw;
`

const Inputs = styled.input`
border: 1px solid #05df05;
border-radius: 15px;
margin-left: 10px;
background: rgba(255,247,185,0.5);
::placeholder{
    color:#05df05;
    text-align:center
}
`

const CardPlaylist = styled.div`
  border: 1px solid #05df05;
  color: black;
  font-size: 15px;
  border-radius: 15px;
  /* background-image: linear-gradient(to left, green, #30a14a, #05df05); */
  display: flex;
  width: 75%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin-bottom: 20px;
  flex-direction: left;
  background: rgba(255,247,185,0.5);
  opacity: 1;
  `

const Footer = styled.footer`
margin-top: -9px;
text-align: center;
background-image: linear-gradient(to left, black, gold, black);
color:black;
border-top: 2px solid #05df05;

`


export default class DetalharPlaylist extends React.Component {
    state = {
        nome: "",
        artista: "",
        url: "",
        listaDeMusicas: []
    }


    addMusicaPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelect.id}/tracks`
        const body = {
            name: this.state.nome,
            artist: this.state.artista,
            url: this.state.url,
        }

        axios.post(url, body, {
            headers: {
                Authorization: "caio-chamarelli-banu"
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("Veja sua playlist em detalhes!")
                this.setState({ nome: "", artista: "", url: "" })
                this.pegarTrilhasPlaylist()

            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }

    pegarTrilhasPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelect.id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "caio-chamarelli-banu"
            }
        })
            .then((res) => {
                this.setState({ listaDeMusicas: res.data.result.tracks })
                console.log("Atenção", res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.pegarTrilhasPlaylist()
    }


    onChangeInputNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    onChangeInputArtista = (e) => {
        this.setState({ artista: e.target.value })
    }

    onChangeInputUrl = (e) => {
        this.setState({ url: e.target.value })
    }





    render() {

        const retornaMusica = this.state.listaDeMusicas.map((musica) => {
            return (<CardPlaylist key={musica.id}>
                <h4>Nome:</h4><p>{musica.name}</p>
                <h4>Artista</h4><p>{musica.artist}</p>
                <h4>Música</h4><audio controls src={musica.url} />
            </CardPlaylist>
            )
        })
        return (
            <div>
                <Header>
                    <img src="/img/skull.png" />
                    <h2>Labefy</h2>

                </Header>
                <Main>
                    <DivInputsButton>
                        <div>
                            <Inputs
                                placeholder="Nome da Música"
                                value={this.state.nome}
                                onChange={this.onChangeInputNome}
                            />
                            <Inputs
                                placeholder="Artista"
                                value={this.state.artista}
                                onChange={this.onChangeInputArtista}
                            />
                            <Inputs
                                placeholder="URL"
                                value={this.state.url}
                                onChange={this.onChangeInputUrl}
                            />
                        </div>
                        <div>
                            <button onClick={this.addMusicaPlaylist}>Adicionar</button>
                        </div>
                    </DivInputsButton>
                    {retornaMusica}
                    <button onClick={this.props.renderizaPaginaVoltar}>Voltar para lista</button>

                </Main>
                <Footer>Todos os direitos reservados. Desenvolvido por Caio Chamarelli, Turma Banu, 2021.</Footer>
            </div>
        )
    }
}

