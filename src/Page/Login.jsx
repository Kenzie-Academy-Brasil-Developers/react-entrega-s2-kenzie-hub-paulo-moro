import Logo from "../../Files/Logo.png"
import { StyledBtn } from "../Components/Button/styles"
import { StyledHeader } from "../Styles/Pages/styles"
import FormLogin from "../Components/FormLogin"

function Login(){
    return(
    <>
      <StyledHeader>
      <figure>
          <img src={Logo} alt="Kenzie-hub" />
      </figure>

      <StyledBtn>voltar</StyledBtn>
      </StyledHeader>
      <FormLogin/>

    </>
    )
}


export default Login