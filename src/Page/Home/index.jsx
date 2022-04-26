import Logo from "./../../Files/Logo.png"

import { StyledBtn } from "./../../Styles/Button/styles.js"
import { StyledHeader, StyledTechs, UserSection, StyledNav } from "./styles"
import {StyledContainer} from "./styles"
import { Redirect } from "react-router-dom"
import {  useState } from "react"

import AddForm from "../../Components/FormAdd"
import UpdateForm from "../../Components/FormUpdate"


function Home({auth, setAuth, userData, setUserData, token }){
  
  const [addTechOn, setAddTechOn] = useState(false)  
  const [updateTechOn, setUpdateTechOn] = useState(false)   
  const [tech, setTech] = useState({})

  const {name, course_module, techs} = userData   

  const logout = ()=>{
    setAuth(false)
    localStorage.clear()
    setUserData({})
    
  }  

  const openAddTechModal = () =>{
    setAddTechOn(true)
  }

  const openUpdateTechModal = (techId) =>{  
    
    const updateTech = techs.filter((tech)=>{
      return tech.id === techId
    })

    setTech(updateTech)

    setUpdateTechOn(true)
    
  }

  const closeModal = ()=>{
    setUpdateTechOn(false)
    setAddTechOn(false)
  }  
  

  if(!auth){
    return <Redirect to="/"/>
  }

  
  return(
    <>
      <StyledNav>
        <figure>
            <img src={Logo} alt="Kenzie-hub" />
        </figure>
    
        <StyledBtn onClick={logout}>Sair</StyledBtn>
      </StyledNav>
      <StyledHeader>
        <h1>Olá, {name}</h1>
        <span>{course_module}</span>
      </StyledHeader>
      <UserSection>
        <h1>Tecnologias</h1>
        <button onClick={openAddTechModal}>+</button>
      </UserSection>
      <StyledContainer>
        <ul>
          {techs?.map((tech)=>{
            return(
              <li key={tech.id} onClick={()=>openUpdateTechModal(tech.id)}>
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
          <AddForm token={token} closeModal={closeModal} userData={userData} setUserData={setUserData} />
        </div>
      </StyledTechs>
      }

      {updateTechOn && <StyledTechs>

        <div>
          <section>
            <h1>Atualizar tecnologia</h1>
            <button onClick={closeModal}>x</button>
          </section>
          <UpdateForm closeModal={closeModal} token={token} tech={tech} userData={userData} setUserData={setUserData}/>
        </div>
      </StyledTechs>
      }
    </>
  )
}


export default Home