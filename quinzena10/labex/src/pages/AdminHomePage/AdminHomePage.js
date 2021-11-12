// import React from 'react'
import { useHistory } from "react-router-dom"


const AdminHomePage = () => {

    const history = useHistory()

    const goBackToLoginPage = () => {
        history.goBack("/login")
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const Logout = () => {
        history.goBack("/login")
    }

    return (
        <div>
            <h2>Painel Administrativo</h2>
            <button onClick={goBackToLoginPage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default AdminHomePage
