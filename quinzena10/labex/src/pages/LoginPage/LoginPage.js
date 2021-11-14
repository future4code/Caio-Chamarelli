import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/UseForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/Url'

const LoginPage = () => {

    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
        
      });


    const logar = (event) => {
        event.preventDefault();
         const body = {
                email: form.email,
                password: form.password
            }
         
             axios.post(`${BASE_URL}/login`, body)
              .then(response => {
                 localStorage.setItem("token", response.data.token)
                 history.push("/admin/trips/list")
             })
             .catch(error => {
                 alert("Usuário ou senha incorreta")
             })
        
        console.log("Formulário enviado!", form);
        cleanFields();
      };

    const goBackHome = () => {
        history.push("/")
    }


    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={logar}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder="E-mail"
                    required
                    type="email"
                    pattern={"^.{3,}"}
                    title={"Insira um email que válido"}
                />

                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder="senha"
                    required
                    type={"password"}                
                    />

                    <button>Login</button>
            </form>
            <button onClick={goBackHome}>Voltar</button>
            
        </div>
    )
}

export default LoginPage
