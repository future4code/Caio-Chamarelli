import React from "react"
import { useHistory } from 'react-router-dom';


const HomePage = () => {

    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        // history.push("/login")
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/login");
        }
        else {
            history.push("/admin/trips/list");
        };
    }

    return (
        <div>
            <h2>LabeX</h2>
            <button onClick={goToLoginPage}>Area de Admin</button>
            <button onClick={goToListTripsPage}>Ver viagens</button>
        </div>
    )
}

export default HomePage
