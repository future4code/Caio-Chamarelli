import React from 'react'
import { useHistory } from 'react-router'

const ApplicationFormPage = () => {

    const history = useHistory()

    const goBackToTripList = () => {
        history.goBack("/trips/list")
    }


    return (
        <div>
            <h3>Insceva-se para uma viagem</h3>
            <button onClick={goBackToTripList}>voltar</button>
            <button>enviar</button>
        </div>
    )
}

export default ApplicationFormPage
