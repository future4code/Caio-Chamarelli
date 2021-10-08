import React from 'react';
import axios from 'axios';
import Pagina from './Pagina';
import styled from "styled-components";

const Body = styled.div`
text-align: center

`




class App extends React.Component{
  state = {
    nomeValue:"",
    emailValue:"",
    usuarios:[],
    pagina: false
  };

  componentDidMount = () => {
    this.pegarUsuarios();
  };

  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "caio-chamarelli-banu"
      }
    }).then((resposta) => {
      this.setState({ pegarUsuarios: resposta.data })
    }).catch((error) => {
      console.log(error.message)
    });
  };

  criarUsuario = () => {
    const body = {
      name: this.state.nomeValue,
      email: this.state.emailValue
    };
    

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    headers: {
      Authorization: "caio-chamarelli-banu",
    }
  }
  ).then((resposta) => {
    console.log(resposta);
    this.setState({ nomeValue:"", emailValue:"" });
    this.pegarUsuarios();
  }).catch((error) => {
    console.log(error.message);
  });
 };

deleteUsuario = (id) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
    headers: {
      Authorization: "caio-chamarelli-banu"
    }
  }).then((resposta) => {
    this.pegarUsuarios();
    console.log(resposta);
}).catch((error) => {
  console.log(error.message);
})
}



onChangeNomeValue = (e) => {
  this.setState({ nomeValue: e.target.value });
};

onChangeEmailValue = (e) => {
  this.setState({ emailValue: e.target.value });
};

renderizaPagina = () => {
  this.setState({ pagina: true});
};

renderizaHome = () => {
  this.setState({ pagina: false});
};

render() {

  if(this.state.pagina) {
    return (
      <Pagina 
      pegarUsuarios={this.state.pegarUsuarios}
      renderizaHome={this.renderizaHome}
      deleteUsuario={this.deleteUsuario}
      />
    )
  }

  return (
    <Body>
      <div>
      <h1>Labenusers</h1>
      <button onClick={this.renderizaPagina}>Trocar de Página</button>
      </div>

      <div>
        <h2>Criar Usuário </h2>
      <input
        placeholder="Nome"
        value={this.state.nomeValue}
        onChange={this.onChangeNomeValue}
        />
        <input
          placeholder="Email"
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue}
          />
          <button onClick={this.criarUsuario}>Criar</button>
          </div>
    </Body>
  );
};
}


export default App

