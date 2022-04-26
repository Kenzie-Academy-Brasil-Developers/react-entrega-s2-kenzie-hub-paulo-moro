import { useEffect, useState } from 'react';
import { Switch,Route } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import RegisterPage from "./../Page/Register";

function Routes(){
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem("@KenzieHub:token")
    
    if(token){
      return setAuth(true)
    }
  },[])
 

  return(
    <Switch>
      <Route exact path={"/register"}>
        <RegisterPage/>
      </Route>
      <Route exact path={"/"}>
        <Login auth={auth} setAuth={setAuth}/>          
      </Route>
      <Route exact path={"/home"}>
          <Home auth={auth}  setAuth={setAuth}/>
      </Route>
    </Switch>
  )
}


export default Routes