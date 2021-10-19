import React from "react";
import axios from "axios";
import styled from "styled-components"
import DetalharPlaylist from "./DetalharPlaylist";
import Swal from "sweetalert2"


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
color: #05df05;
background-image: url(http://waterbearlearning.com/wp-content/uploads/2019/10/water_bear_learning_video_music3.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
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
border-top: 1px solid #05df05
`

const ButtonListCard = styled.button`
  margin-left: 5px;
  border-radius: 15px;
  height: 20px;
  background-color: black;
  color: #05df05;
  width: 100px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  width: 150px;
  border: 1px solid #05df05;
  height: 40px;
  background-image: linear-gradient(to left, black, gold, black);
  color: black;
  justify-content: center;
  align-items: center;
  `

const ButtonDeleteCard = styled.button`
  margin-left: 5px;
  border-radius: 15px;
  background-color: black;
  color: #05df05;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  width: 40px;
  border: 1px solid #05df05;
  height: 40px;
  background-image: linear-gradient(to left, black, gold, black);
  color: black;
  justify-content: center;
  align-items: center;
  `

const ButtonVoltar = styled.button`
    width: 150px;
    margin-left: 12px;
    font-size: 15px;
    border-radius:15px;
    border: 1px solid #05df05;
    height: 40px;
    background-image: linear-gradient(to left, black, gold, black);
    color: black;
  `

const TrackCard = styled.div`
  display: flex;
  justify-content: space-between;

  `

export default class ListaDePlaylists extends React.Component {
    state = {
        playlists: [],
        paginaDetalhes: false,
        playlistSelect: ""
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "caio-chamarelli-banu"
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                console.log(err)
                Swal.fire('Eita! deu beyblade', 'tenta outra vez!', 'error')
            })
    }

    deletarPlaylist = (id) => {
        if (window.confirm("Tem certeza que vai deletar o bagulho?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "caio-chamarelli-banu"
                }
            })
                .then((res) => {
                    Swal.fire('Deu Bom', 'Playlist Deletada, Jovem!!', 'success')
                    this.pegarPlaylists()
                })
                .catch((err) => {
                    Swal.fire('Eita Nois!', 'O negocio não funfou!!', 'error')
                })
        }
    }


    renderizaPaginaDetalhes = (selecionaPlaylist) => {
        this.setState({ paginaDetalhes: true, playlistSelect: selecionaPlaylist })
    }

    renderizaPaginaVoltar = () => {
        this.setState({ paginaDetalhes: false })
    }

    render() {
        if (this.state.paginaDetalhes) {
            return (
                <DetalharPlaylist
                    renderizaPaginaVoltar={this.renderizaPaginaVoltar}
                    playlistSelect={this.state.playlistSelect}
                />
            )
        }


        console.log(this.state.playlists)
        const listaPlaylists = this.state.playlists.map((playlist) => {
            console.log(playlist)
            return (<CardPlaylist key={playlist.id}>
                {playlist.name}
                <TrackCard>
                    <ButtonListCard onClick={() => this.renderizaPaginaDetalhes(playlist)}>Bizu na Playlist</ButtonListCard>
                    <ButtonDeleteCard onClick={() => this.deletarPlaylist(playlist.id)}>X</ButtonDeleteCard>
                </TrackCard>
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
                    <h2>Veja aqui as suas Playlists!</h2>
                    {listaPlaylists}
                    <ButtonVoltar onClick={this.props.irParaCriar}>Voltar para Criar</ButtonVoltar>
                </Main>
                <Footer>Todos os direitos reservados. Desenvolvido por Caio Chamarelli, Turma Banu, 2021.</Footer>
            </div>
        )
    }
}