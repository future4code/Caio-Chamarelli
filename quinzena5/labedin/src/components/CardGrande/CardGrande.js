import React from 'react';
import styled from 'styled-components';


const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Img = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4Nome = styled.h4 `
    margin-bottom: 15px;
`

const DivInterna = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCard>
            <Img src= {props.imagem} />
            <DivInterna>
                <H4Nome>{ props.nome }</H4Nome>
                <p>{ props.descricao }</p>
            </DivInterna>
        </BigCard>
    )
}

export default CardGrande;