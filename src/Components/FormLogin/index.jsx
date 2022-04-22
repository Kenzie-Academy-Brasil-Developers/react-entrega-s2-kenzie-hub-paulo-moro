import { StyledForm } from "../../Styles/Form/styles.js"
import { StyledContainer } from "./style.js"
import { StyledBtn } from "../Button/styles.js"



function FormLogin(){
    
  return(
  
      <StyledContainer>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <StyledForm>
          
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="Digite aqui seu e-mail"/>
          </label>
         
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua Senha"/>
          </label>
               
          
          <StyledBtn>Login</StyledBtn>
          
        </StyledForm>
      </StyledContainer>
    
  )
}


export default FormLogin