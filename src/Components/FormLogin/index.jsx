import { StyledForm } from "../../Styles/Form/styles.js"
import { StyledBtn } from "../../Styles/Button/styles.js"
import { StyledContainer } from "../../Styles/Pages/styles.js"
import api from "../../Services/api.js"

import * as yup from "yup"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import {toast} from "react-toastify"




function FormLogin({setAuth}){
  const history = useHistory()
 
    const schema = yup.object().shape({
        email:yup.string().required("Campo Obrigatório"),        
        password:yup.string().required("Campo obrigatório").min(6, "A senha precisa ter 6 digitos")       
      
      })
    const { register, handleSubmit, formState:{errors} } = useForm({
      resolver:yupResolver(schema)
    })
    const handleLogin = async (data) =>{
     
      const errorsIsEmpty = ()=>{
        for(let key in errors){
          if(errors.hasOwnProperty(key)){
            return false
          }
          else{
            return true
          }
        }
      }
      
      if(errorsIsEmpty){
        
        delete data.confirmPassword
        const response = await api.post("/sessions/",data)
        .catch((err)=>{
          console.log(err)
          toast.error("Login ou senha incorretos")
        })          
          const {user, token} = response.data
        
        localStorage.clear()
        localStorage.setItem("@KenzieHub:token", token)
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user))
        setAuth(true)
        toast.success("Login bem sucedido")
          
        
      }

    } 
  return(
  
      <StyledContainer>
        <h1>Login</h1>
        
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="Digite aqui seu e-mail" {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
          </label>
         
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua Senha" {...register("password")}/>
            {errors.password && <span>{errors.password.message}</span>}
          </label>
               
          
          <StyledBtn type="submit">Entrar</StyledBtn>
          
        </StyledForm>
        <p>Ainda não possui uma conta?</p>
        <StyledBtn onClick={()=>history.push("/register")}>Cadastre-se</StyledBtn>
      </StyledContainer>
    
  )
}


export default FormLogin