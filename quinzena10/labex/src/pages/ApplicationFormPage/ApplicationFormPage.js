import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/UseForm'
import { countries } from '../../constants/Countries'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/Url'

const ApplicationFormPage = () => {

    const history = useHistory()

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

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        candidatura: "",
        profissao:"",
        pais:"",
        trip:""
      });

      const cadastrar = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!", form);
        cleanFields();
      };
    

    const goBackToTripList = () => {
        history.goBack("/trips/list")
    }


    return (
        <div>
            <h3>Insceva-se para uma viagem</h3>

            <div>
            <select
                value={form.trip}
                required
                name={"trip"}
                onChange={onChange}
            >
            <option value={""}>Selecione sua viagem:</option>
                {trips.map((trip) => {
                    return (
                        <option value={trip.id} key={trip.id}>
                            {trip.name} {trip.planet}
            </option>
                    );
                })}
            </select>
        <form onSubmit={cadastrar}>
            <input
                name={"nome"}
                value={form.nome}
                onChange={onChange}
                placeholder="Nome"
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
            />
            <input
                name={"idade"}
                value={form.idade}
                onChange={onChange}
                placeholder="Idade"
                required
                type={"number"}
                min={18}
            />
            <input
                name={""}
                value={form.applicationText}
                onChange={onChange}
                placeholder="Candidatura"
                required
                type={"text"}
            />
            <input
                name={""}
                value={form.profession}
                onChange={onChange}
                placeholder="Profissão"
                required
                type={"text"}
            />

            <select
                value={form.country}
                required
                name={"country"}
                onChange={onChange}
            >
            <option value={""}>Selecione seu país:</option>
                {countries.map((country) => {
                    return (
                        <option value={country} key={country}>
                            {country}
            </option>
                    );
                })}
            </select>



          {/* <input
            name={""}
            value={form.country}
            onChange={onChange}
            placeholder="País"
            required
            type={"country"}
          /> */}
        </form>
      </div>

            <button onClick={goBackToTripList}>voltar</button>
            <button>enviar</button>
        </div>
    )
}

export default ApplicationFormPage