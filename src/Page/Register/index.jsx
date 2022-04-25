import FormRegister from "./../../Components/FormRegister"
import Logo from "./../../Files/Logo.png"
import { StyledHeader } from "./styles.js"
import { StyledBtn } from "./../../Styles/Button/styles.js"
import { useHistory } from "react-router-dom"



function RegisterPage(){
  const history = useHistory()
  return(
    <>
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Kenzie-hub" />
      </figure>

      <StyledBtn onClick={()=> history.push("/")}>voltar</StyledBtn>
    </StyledHeader>
    <FormRegister/>
    
    </>)
}


export default RegisterPage