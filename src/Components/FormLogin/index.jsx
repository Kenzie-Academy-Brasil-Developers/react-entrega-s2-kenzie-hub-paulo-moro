import { StyledForm } from "../../Styles/Form/styles.js"
import { StyledBtn } from "../../Styles/Button/styles.js"
import { StyledContainer } from "../../Styles/Pages/styles.js"

import * as yup from "yup"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import axios from "axios"


function FormLogin(){
  const history = useHistory()
 
    const schema = yup.object().shape({
        email:yup.string().required("Campo Obrigatório"),        
        senha:yup.string().required("Campo obrigatório").min(8, "A senha precisa ter 8 digitos")       
      
      })
      const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:yupResolver(schema)
      }) 
  return(
  
      <StyledContainer>
        <h1>Login</h1>
        
        <StyledForm>
          
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="Digite aqui seu e-mail" {...register("email")}/>
          </label>
         
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua Senha" {...register("password")}/>
          </label>
               
          
          <StyledBtn>Entrar</StyledBtn>
          
        </StyledForm>
        <p>Ainda não possui uma conta?</p>
        <StyledBtn onClick={()=>history.push("/register")}>Cadastre-se</StyledBtn>
      </StyledContainer>
    
  )
}


export default FormLogin