import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import useRequestData from '../../hooks/UseRequestData'
import { BASE_URL } from '../../constants/Url'

const ListTripsPage = () => {
    const [trips, setTrips] = useState([])


    useEffect(() => {
        // setIsLoading(true)
    
        axios.get(`${BASE_URL}/trips`)
          .then(response => {
            // setIsLoading(false)
            console.log(response.data.trips)
            setTrips(response.data.trips)
          })
          .catch(error => {
            // setIsLoading(false)
            // setError(error)
            console.log(error.message)
        })
      }, [])

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
            {trips.map((trip) => {
                return( 
                
                <div>
                    <p key={trip.id}>{trip.trips}</p>
                    <p>{trip.name}</p>
                    <p>{trip.description}</p>
                    <p>{trip.planet}</p>
                    <p>{trip.durationInDays}</p>
                    <p>{trip.date}</p>
                </div>
            )
        })
    }

            <button onClick={goBackHome}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Increva-se</button>
            
        </div>
    )
}

export default ListTripsPage
