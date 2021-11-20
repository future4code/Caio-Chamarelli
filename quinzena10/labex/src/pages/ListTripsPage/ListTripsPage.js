import React from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/UseRequestData'
import { BASE_URL } from '../../constants/Url'

const ListTripsPage = () => {
    const [tripsData] = useRequestData(`${BASE_URL}/trips`)

    const history = useHistory()

    const goBackHome = () => {
        history.goBack("/")
    }

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <h3>Lista de viagens</h3>
            {tripsData?.trips.map((trip) => {
                return<div>
                    <p key={trip.id}>{trip.name}</p>
                    <p>{trip.description}</p>
                    <p>{trip.planet}</p>
                    <p>{trip.durationInDays}</p>
                    <p>{trip.date}</p>
                </div>
            
        })
    }

            <button onClick={goBackHome}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Increva-se</button>
            
        </div>
    )
}

export default ListTripsPage
