
import React from 'react';
import './App.css';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final';




export default class App extends React.Component {
  
  state = {
    etapa: 1,
  }
  
  renderizaEtapa = () => {
      switch(this.state.etapa) {
        case 1:
            return <Etapa1 />
        case 2:
            return <Etapa2 />
        case 3:
            return <Etapa3 />
        case 4:
            return <Final />
            default:
              return <p>Erro! Página não encontrada.</p>
      }
  }
  
  
  
  onClickirParaProximaEtapa = (e) => {
    const etapaAtual = this.state.etapa
    const etapaNova = etapaAtual + 1
    this.setState({etapa: etapaNova})
  }
  


  render() {
      return (
      <div className="Page">
        {this.renderizaEtapa()}
        <button onClick={this.onClickirParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
 }
}

