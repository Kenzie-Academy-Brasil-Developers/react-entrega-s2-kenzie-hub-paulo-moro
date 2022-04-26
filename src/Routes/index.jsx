import { useEffect, useState } from 'react';
import { Switch,Route } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import RegisterPage from "./../Page/Register";

function Routes(){
  const [auth, setAuth] = useState(false)
  const [userData, setUserData] = useState({})
  const [token, setToken] = useState('')
  useEffect(()=>{

    const storedToken = localStorage.getItem("@KenzieHub:token")
       
    setUserData(JSON.parse(localStorage.getItem("@KenzieHub:user"))) 
    
    if(storedToken){
      setToken(storedToken)
      setAuth(true)
    }
    
  },[])
 

  return(
    <Switch>
      <Route exact path={"/register"}>
        <RegisterPage/>
      </Route>
      <Route exact path={"/"}>
        <Login auth={auth} setAuth={setAuth} setUserData={setUserData}/>          
      </Route>
      <Route exact path={"/home"}>
          <Home auth={auth}  setAuth={setAuth} setUserData={setUserData} userData={userData} token = {token}/>
      </Route>
    </Switch>
  )
}


export default Routes