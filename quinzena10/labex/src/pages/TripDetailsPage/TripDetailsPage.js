import React from 'react'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import { BASE_URL } from '../../constants/Url';
import { useState, useEffect } from "react";
import axios from 'axios'
import { MainCardDetail, CardDetail } from './TripDetailStyled';
// import useRequestData from "../../Hooks/UseRequestData";

const TripDetaislPage = () => {

  const history = useHistory();

  const params = useParams()

  const [tripDetail, setTripDetail] = useState([]);

  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    },
  };

  const tripId = params.tripId

  const getTripDetail = () => {


    axios.get(`${BASE_URL}/trip/${params.tripId}`, headers)
      .then((response) => {
        setTripDetail(response.data.trip);
      })
      .catch((error) => {
        console.log(error.response.data);
      })
  }

  useEffect(() => {
    getTripDetail();
  });


  const aproveApplier = (applier) => {

    const body = { approve: true };
    axios.put(`${BASE_URL}/trips/${params.tripId}/candidates/${applier.id}/decide`, body, headers)
      .then((response) => {
        alert(`Você aprovou o candidato ${applier.name}!`);
        getTripDetail();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  };

  const reproveApplier = (applier) => {

    const body = { approve: false };
    axios.put(`${BASE_URL}/trips/${params.tripId}/candidates/${applier.id}/decide`, body, headers)
      .then((response) => {
        alert(`Você reprovou o candidato ${applier.name}!`);
        getTripDetail();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  };




  const goBack = () => {
    history.goBack()
  }

  return (
    <MainCardDetail>
      <h1>Lista De Viagens</h1>

      <h1 title={tripDetail.name}> </h1>
      <CardDetail>
        <p>Nome: {tripDetail.name}</p>
        <p>Descrição: {tripDetail.description}</p>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays} dias</p>
        <p>Data de partida: {tripDetail.date}</p>
      </CardDetail>



      <button onClick={goBack}>Voltar</button>

      <h2>Candidatos Pendentes</h2>
      {tripDetail.candidates?.map((applier) => {
        return (
          <div key={applier.id}>
            <p>Candidato: {applier.name}</p>
            <p>Idade: {applier.age} anos</p>
            <p>País de origem: {applier.country}</p>
            <p>Profissão: {applier.profession}</p>
            <p>Motivação: {applier.applicationText}</p>
            <div>
              <button onClick={() => aproveApplier(applier)}>APROVAR</button>
              <button onClick={() => reproveApplier(applier)}>REPROVAR</button>
            </div>
          </div>
        )
      })}

      <h2>Candidatos aprovados</h2>
      <div>
        {tripDetail.approved?.map((applier) => {
          return (
            <div key={applier.id}>
              <ul>
                <li>{applier.name}, {applier.age} anos, {applier.country}</li>
              </ul>
            </div>


          );
        })}
      </div>


    </MainCardDetail >
  )
}

export default TripDetaislPage