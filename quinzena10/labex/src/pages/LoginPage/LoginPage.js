import React from 'react'
import { useHistory } from 'react-router'

const LoginPage = () => {

    const history = useHistory()

    const goBackHome = () => {
        history.goBack("/")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }


    return (
        <div>
            <h3>Login</h3>
            <button onClick={goBackHome}>Voltar</button>
            <button onClick={goToAdminHomePage}>Login</button>
        </div>
    )
}

export default LoginPage
