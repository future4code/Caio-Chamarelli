import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/UseForm'
import { countries } from '../../constants/Countries'
import axios from 'axios'
import { BASE_URL } from '../../constants/Url'
import useRequestData from '../../hooks/UseRequestData'

const ApplicationFormPage = () => {

    const history = useHistory()

    const [tripsData] = useRequestData(`${BASE_URL}/trips`)

    const { form, onChange, cleanFields } = useForm({
        appliedTrip:"",
        name: "",
        age: "",
        applicationText: "",
        profession:"",
        country:"",
        
      });

      const cadastrar = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
            axios.post(`${BASE_URL}/trips/${form.appliedTrip}/apply`, body)
             .then(response => {
                alert ("Aplicação bem sucedida")
            })
            .catch(error => {
                alert("Ops, algo deu errado!")
            })
        
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
        <form onSubmit={cadastrar}>

        <select
                value={form.appliedTrip}
                required
                name={"appliedTrip"}
                onChange={onChange}
            >
            <option value={""}>Selecione sua viagem:</option>
                {tripsData?.trips.map((trip) => {
                    return (
                        <option value={trip.id} key={trip.id}>
                            {trip.name} {trip.planet}
            </option>
                    );
                })}
            </select>

            <input
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder="Nome"
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
            />

            <input
                name={"age"}
                value={form.age}
                onChange={onChange}
                placeholder="Idade"
                required
                type={"number"}
                min={18}
            />

            <input
                name={"applicationText"}
                value={form.applicationText}
                onChange={onChange}
                placeholder="Candidatura"
                required
                type={"text"}
            />

            <input
                name={"profession"}
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

            <button>enviar</button>
        </form>
      </div>

            <button onClick={goBackToTripList}>voltar</button>
            
        </div>
    )
}

export default ApplicationFormPage