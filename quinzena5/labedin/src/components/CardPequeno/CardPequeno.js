import React from 'react';
import styled from 'styled-components';


const SmallCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 425px;
`

const ImgSmall = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const DivInternaSmall = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallCard>
            <ImgSmall src={props.imagem} />
            <DivInternaSmall>
                <p>{props.email}</p>
            <p>{props.endereco}</p>
        </DivInternaSmall>
    </SmallCard>
    )
}

export default CardPequeno