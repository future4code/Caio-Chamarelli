import React from 'react';
import styled from "styled-components";

const Body = styled.div`
text-align: center

`

class Pagina extends React.Component{
    render() {
        
        const listaUsuarios = this.props.pegarUsuarios.map((pegarUsuarios) => {
            return <body>
                <li key={pegarUsuarios.id}>{pegarUsuarios.name}</li>
                <button onClick={() => this.props.deleteUsuario(pegarUsuarios.id)}>Delete</button>
            </body>
            

        });
        
        return (
            <Body>
                <button onClick={this.props.renderizaHome}>Mudar de página</button>
                <div>
                    <h2>Usuarios:</h2>
                    {listaUsuarios}
                </div>
            
            </Body>
        );
        
    };
}

export default Pagina
