import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/UseForm'
import { countries } from '../../constants/Countries'

const ApplicationFormPage = () => {

    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        candidatura: "",
        profissao:"",
        pais:""
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