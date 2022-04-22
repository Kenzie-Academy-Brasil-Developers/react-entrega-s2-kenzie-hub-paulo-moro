import { StyledForm } from "../../Styles/Form/styles.js"
import { StyledContainer } from "../../Styles/Pages/styles.js"
import { StyledBtn } from "../Button/styles.js"



function FormRegister(){
    
  return(  
      <StyledContainer>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <StyledForm>
          <label>
            <p>Nome</p>
            <input type="text" placeholder="Digite aqui seu nome"/>
          </label>
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="Digite aqui seu e-mail"/>
          </label>
          <label>
            <p>Bio</p> 
            <textarea type="text" placeholder="Digite aqui a sua bio"/>
          </label>
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua Senha"/>
          </label>
          <label>
            <p>Confirmar senha</p>
            <input type="password" placeholder="Confirmação da Senha"/>
          </label>      
          <label>
            <p>Módulo</p>        
            <select name="course_module">
              <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </select>
          </label>
          <StyledBtn>Cadastrar</StyledBtn>
          
        </StyledForm>
      </StyledContainer>
  
  )
}


export default FormRegister