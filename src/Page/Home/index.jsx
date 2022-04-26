import Logo from "./../../Files/Logo.png"

import { StyledBtn } from "./../../Styles/Button/styles.js"
import { StyledHeader, StyledTechs, UserSection } from "./styles"
import {StyledContainer} from "./styles"
import { Redirect } from "react-router-dom"
import { StyledForm } from "../../Styles/Form/styles"
import { useState } from "react"

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../Services/api"
import { toast } from "react-toastify"

function Home({auth, setAuth}){
  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user"))
  const {name, course_module, techs} = userData
  const userToken = localStorage.getItem("@KenzieHub:token")
  const [addTechOn, setAddTechOn] = useState(false)
  const [updateTechOn, setUpdateTechOn] = useState(false)
  const schema = yup.object().shape({
    title:yup.string().required("Campo Obrigatório"),        
    status:yup.string().required("Campo obrigatório")    
  
  })

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  })   
  
  const logout = ()=>{
    setAuth(false)
    localStorage.clear()
    
  }  
  const openAddTechModal = () =>{
    setAddTechOn(true)
  }
  const closeModal = ()=>{
    setUpdateTechOn(false)
    setAddTechOn(false)
  }  

  const addTech = async (data) =>{
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
      console.log(data)
      await api.post("/users/techs", data).catch((err)=>{
        console.log(err)
        if(err.message === "User Already have this technology created, you can only update it"){
          toast.error("tech já existente, atualize a tech já existente")
        }
      }).then((response)=>{
        console.log(response)
      })
    }
  }
  const updateTech = (data) =>{
    console.log(data)
  }
 

  if(!auth){
    return <Redirect to="/"/>
  }
  
  return(
    <>
      <StyledHeader>
      <figure>
          <img src={Logo} alt="Kenzie-hub" />
      </figure>
  
      <StyledBtn onClick={logout}>Sair</StyledBtn>
      </StyledHeader>
      <UserSection>
        <h1>Olá, {name}</h1>
        <span>{course_module}</span>
      </UserSection>
      <UserSection>
        <h1>Tecnologias</h1>
        <button onClick={openAddTechModal}>+</button>
      </UserSection>
      <StyledContainer>

        <ul>
          {techs.map((tech)=>{
            return(
              <li key={tech.id} id={tech.id} onClick={updateTech}>
                <h2>{tech.title}</h2>
                <span>{tech.status}</span>
              </li>
            )
          })}
        </ul>
     
  
      </StyledContainer>
      {addTechOn && <StyledTechs>

        <div>
          <section>
            <h1>Cadastrar tecnologia</h1>
            <button onClick={closeModal}>x</button>
          </section>
          <StyledForm onSubmit={handleSubmit(addTech)} >
            <label>
              <p>Nome</p>
              <input type="text" {...register('title')} />
            </label>
            <label>
              <p>Selecione o status</p>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <StyledBtn type="submit">Cadastrar Tecnologia</StyledBtn>
            </label>
            
            
          </StyledForm>
        </div>
      </StyledTechs>
      }
      {updateTechOn && <StyledTechs>

        <div>
          <section>
            <h1>Atualizar tecnologia</h1>
            <button onClick={closeModal}>x</button>
          </section>
          <StyledForm onSubmit={handleSubmit(addTech)} >
            <label>
              <p>Nome do Projeto</p>
              <input type="text"  {...register('title')} />
            </label>
            <label>
              <p>Selecione o status</p>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <StyledBtn type="submit">Cadastrar Tecnologia</StyledBtn>
            </label>
            
            
          </StyledForm>
        </div>
      </StyledTechs>
      }
    </>
  )
}


export default Home