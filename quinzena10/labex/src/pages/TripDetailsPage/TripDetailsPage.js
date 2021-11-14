import React from 'react'
import { BASE_URL } from '../../constants/Url'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'

const TripDetailsPage = () => {

    const history = useHistory();

    const { id } = useParams();

    const [tripDetail, setTripDetail] = useState([]);
    const [loading, setLoading] = useState(true);



    const goToAdminHome = () => {
        history.push("/admin/trips/list");
    };

    const getTripDetail = () => {
        const authenticator = localStorage.getItem("token");
        axios.get(`${BASE_URL}/trip/${id}`,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                setTripDetail(response.data.trip);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                setLoading(false);
            })
    }

    useEffect(() => {
        getTripDetail();
    });


    const aproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = { approve: true };
        axios.put(`${BASE_URL}/trips/${id}/candidates/${applier.id}/decide`, body,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                alert(`Você aprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    const reproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = { approve: false };
        axios.put(`${BASE_URL}/trips/${id}/candidates/${applier.id}/decide`, body,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                alert(`Você reprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };


    return (
        <div>
            <button onClick={goToAdminHome}>Voltar</button>
            <div>
                <p>{tripDetail.name}</p>
            </div>
            <div>
                <p>Nome: {tripDetail.name}</p>
                <p>Descrição: {tripDetail.description}</p>
                <p>Planeta: {tripDetail.planet}</p>
                <p>Duração: {tripDetail.duration}</p>
                <p>Data de partida:{tripDetail.date}</p>
            </div>
        </div>
    )
}

export default TripDetailsPage
