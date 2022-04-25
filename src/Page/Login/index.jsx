import Logo from "./../../Files/Logo.png"
import { StyledHeader } from "./styles.js"
import FormLogin from "../../Components/FormLogin"
import { useHistory } from "react-router-dom";

function Login(){

  const history = useHistory()


  return(
  <>
    <StyledHeader>
    <figure>
        <img src={Logo} alt="Kenzie-hub" />
    </figure>    
    </StyledHeader>
    <FormLogin/> 
      
   
  </>
  )
}


export default Login