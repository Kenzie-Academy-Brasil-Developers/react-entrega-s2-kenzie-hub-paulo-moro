import FormRegister from "../Components/FormLogin"
import Logo from "../../Files/Logo.png"
import { StyledHeader } from "../Styles/Pages/styles"
import { StyledBtn } from "../Components/Button/styles"



function RegisterPage(){
    <>
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Kenzie-hub" />
      </figure>

      <StyledBtn>voltar</StyledBtn>
    </StyledHeader>
    <FormRegister/>

    </>
}


export default RegisterPage