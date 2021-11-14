import React from 'react'
import { planets } from '../../constants/Planets';
import useForm from '../../hooks/UseForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/Url';
import { useHistory } from 'react-router-dom'


const CreateTripPage = () => {

    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description:"",
        durationInDays:"",
        
      });

      const criarViagem = (event) => {
        event.preventDefault();

        const headers = {
            headers: {
              auth: localStorage.getItem("token")
            },
          };
       
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
            axios.post(`${BASE_URL}/trips`, body, headers)
             .then(response => {
                alert ("Viagem Criada")
            })
            .catch(error => {
                alert("Ops, algo deu errado!")
            })
        
        console.log("Formulário enviado!", form);
        cleanFields();
      };

        

      const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }


    return (
        <div>
            <div>
        <form onSubmit={criarViagem}>

        <input
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder="Nome"
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
            />

        <select
                value={form.planet}
                required
                name={"planet"}
                onChange={onChange}
            >
            <option value={""}>Escolha um planeta</option>
                {planets.map((selectPlanet) => {
                    return (
                        <option value={selectPlanet} key={selectPlanet}>
                            {selectPlanet}
            </option>
                    );
                })}
            </select>

            <input
                name={"date"}
                value={form.date}
                onChange={onChange}
                placeholder="Data"
                required
                type={"date"}
            />

            <input
                name={"description"}
                value={form.description}
                onChange={onChange}
                placeholder="Descrição"
                required
                type={"text"}
            />

            <input
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                placeholder="Duração em dias"
                required
                type={"number"}
            />
            <button>Criar</button>
        </form>
      </div>

            <button onClick={goToAdminPage}>Voltar</button>
        </div>
    )
}

export default CreateTripPage
