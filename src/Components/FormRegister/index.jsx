import { StyledForm } from "../../Styles/Form/styles.js"
import { StyledContainer } from "../../Styles/Pages/styles.js"
import { StyledBtn } from "../../Styles/Button/styles.js"

import * as yup from "yup"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import axios from "axios"

function FormRegister(){
  const history = useHistory()
 
    const schema = yup.object().shape({
        name:yup.string().required("Campo Obrigatório"),
        email:yup.string().required("Campo Obrigatório").email("Formato de email incorreto"),
        bio:yup.string().required("Campo obrigatório"),
        contact:yup.string().required("Campo obrigatório"),
        password:yup.string().required("Campo obrigatório").min(8, "A senha precisa ter 8 digitos").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{4,}$/,"Está faltando um caractere especial, ou um número ou uma letra maiuscula ou minuscula"),
        confirmPassword:yup.string().required("Campo obrigatório").oneOf([yup.ref("password")],"A senha e a cofirmação não são iguais"), 
        course_module:yup.string().required("Campo obrigatório")      
      })

    const { register, handleSubmit, formState:{errors} } = useForm({
      resolver:yupResolver(schema)
    }) 
    const handleRegister = (data)=>{ 
      
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
        axios.post("https://kenziehub.herokuapp.com/users", data)
          .then((response)=>{
            history.push("/")
          })
          .catch((err)=>{
            console.log(err)
          })
        
      }
      
    
    }
  return(  
      <StyledContainer>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <StyledForm onSubmit={handleSubmit(handleRegister)}>
          <label>
            <p>Nome</p> 
            <input type="text" placeholder="Digite aqui seu nome"{...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="Digite aqui seu e-mail"{...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label>
            <p>Bio</p> 
            <textarea type="text" placeholder="Digite aqui a sua bio"{...register("bio")}/>
            {errors.bio && <span>{errors.bio.message}</span>}
          </label>
          <label>
            <p>Contato</p>
            <input type="text" placeholder="Digite aqui o seu perfil do Linkedin"{...register("contact")}/>
            {errors.contact && <span>{errors.contact.message}</span>}
          </label>
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua Senha"{...register("password")}/>
            {errors.password && <span>{errors.password.message}</span>}
          </label>
          <label>
            <p>Confirmar senha</p>
            <input type="password" placeholder="Confirmação da Senha"{...register("confirmPassword")}/>
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </label>      
          <label>
            <p>Módulo</p>        
            <select name="course_module" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </select>
            {errors.course_module && <span>{errors.course_module.message}</span>}
          </label>
          <StyledBtn type="submit" >Cadastrar</StyledBtn>
          
        </StyledForm>
      </StyledContainer>
  
  )
}


export default FormRegister