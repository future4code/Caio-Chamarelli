import React from "react";
import styled from "styled-components";
import axios from "axios"
import ListaDePlaylists from "./components/ListaDePlaylists";
import CriarPlaylists from "./components/CriarPlaylists";

export default class App extends React.Component {
  state = {
    telaAtual: "salvar"
  }


  escolheTela = () => {
    switch(this.state.telaAtual){
      case "salvar":
        return <CriarPlaylists  irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaDePlaylists irParaCriar={this.irParaCriar}/>
      default:
        return <div>Ih! Deu ruim.</div>
    }
  }

  irParaCriar = () => {
    this.setState({telaAtual: "salvar"})
  }  

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render () {
      return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}

