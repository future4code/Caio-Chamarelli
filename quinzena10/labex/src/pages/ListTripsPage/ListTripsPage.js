import React from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/UseRequestData'
import { BASE_URL } from '../../constants/Url'

const ListTripsPage = () => {
    const [trips, setTrips] = useRequestData(`${BASE_URL}/trips`)

    const history = useHistory()

    const goBackHome = () => {
        history.goBack("/")
    }

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            {trips?.map(trip => {
                return <p key={trip.id}>{trip.trips}</p>
            })}
            <h3>Lista de viagens</h3>
            <button onClick={goBackHome}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Increva-se</button>
            
        </div>
    )
}

export default ListTripsPage
