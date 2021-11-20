import React from 'react'
import { useHistory } from "react-router-dom"
import useRequestData from "../../hooks/UseRequestData"
import { BASE_URL } from "../../constants/Url"
import axios from "axios"
import { useState } from "react"


const AdminHomePage = () => {

    const [tripsData] = useRequestData(`${BASE_URL}/trips`)
    const [tripsList, setTripsList] = useState([]);
    // const [loading, setLoading] = useState(true);

    const history = useHistory()

    const goBackToLoginPage = () => {
        history.push("/login")
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }



    const Logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    const goToTripDetails = (tripId) => {
        const tripIdentification = tripId;
        history.push(`/admin/trips/${tripIdentification}`);
    };

    const getTripsList = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setTripsList(response.data.trips);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                // setLoading(false);
            })
    };

    const deleteTrip = (trip) => {
        if (window.confirm("Deseja deletar essa viagem?")) {
            const authenticator = localStorage.getItem("token");
            axios.delete(`${BASE_URL}/trips/${trip.id}`,
                {
                    headers: {
                        auth: authenticator
                    }
                })
                .then((response) => {
                    alert(`Você deletou a viagem ${trip.name} que ia em direção ao planeta ${trip.planet}!`);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
                .catch((error) => {
                    alert(error.response.data.message);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
        }
        else {
            history.push("/admin/trips/list");
        }
    };

    return (
        <div>
            <h2>Painel Administrativo</h2>
            {tripsData?.trips.map((trip) => {
                return<div onClick={goToTripDetails}>
                    <div>
                    <p key={trip.id}>{trip.name}</p>
                    </div>
                    <div onClick={(e) => {
                                    e.stopPropagation();
                                    deleteTrip(trip)
                                }}>
                                    <img
                                        src= "/img/trash.jpg"
                                        alt="Trash Can Icon"
                                    />
                                </div>
                </div>
            
        })
    }

            <button onClick={goBackToLoginPage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default AdminHomePage
