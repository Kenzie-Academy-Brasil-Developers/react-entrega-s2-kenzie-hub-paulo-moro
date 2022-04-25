import Logo from "./../../Files/Logo.png"
import { StyledBtn } from "./../../Styles/Button/styles.js"
import { StyledHeader } from "./styles"
import {StyledContainer} from "./styles"

function Home(){

  return(
    <>
      <StyledHeader>
      <figure>
          <img src={Logo} alt="Kenzie-hub" />
      </figure>

      <StyledBtn>Sair</StyledBtn>
      </StyledHeader>
      <section>
        <h1>Olá, Usuario</h1>
        <span>modulo</span>
      </section>
      <StyledContainer>

      </StyledContainer>
    </>
  )
}


export default Home