import Logo from "./../../Files/Logo.png"

import { StyledBtn } from "./../../Styles/Button/styles.js"
import { StyledHeader, StyledTechs, UserSection } from "./styles"
import {StyledContainer} from "./styles"
import { Redirect } from "react-router-dom"
import { StyledForm } from "../../Styles/Form/styles"
import { useState } from "react"

function Home({auth, setAuth}){
const [addTechOn, setAddTechOn] = useState(false)
const [updateTechOn, setUpdateTechOn] = useState(false)

  const logout = ()=>{
    setAuth(false)
    localStorage.clear()
    
  }
  const addTech = () =>{
    setAddTechOn(true)
  }
  const closeModal = ()=>{
    setUpdateTechOn(false)
    setAddTechOn(false)
  }
  if(!auth){
    return <Redirect to="/"/>
  }

  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user"))
  const {name, id, course_module, techs} = userData

  console.log(userData)
  
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
        <button onClick={addTech}>+</button>
      </UserSection>
      <StyledContainer>

        <ul>
          {techs.map((tech)=>{
            return(
              <li>
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
          <StyledForm >
            <label>
              <p>Nome</p>
              <input type="text" />
            </label>
            <label>
              <p>Selecione o status</p>
              <select name="status">
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