import Logo from "./../../Files/Logo.png"
import { StyledHeader } from "./styles.js"
import FormLogin from "../../Components/FormLogin"
import { Redirect } from "react-router-dom";

function Login({auth,setAuth}){

 if(auth){
   return <Redirect to="/home"/>
 }
 return(
    <>
      <StyledHeader>
      <figure>
          <img src={Logo} alt="Kenzie-hub" />
      </figure>    
      </StyledHeader>
      <FormLogin setAuth={setAuth}/> 
        
    
    </>
  )
 
}


export default Login