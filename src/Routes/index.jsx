import { Redirect } from "react-router-dom";
import { Switch,Route } from "react-router-dom";
import Login from "../Page/Login";
import RegisterPage from "../Page/Register";

function Routes({auth}){

  return(
    <Switch>
      <Route exact path={"/register"}>
        <RegisterPage/>
      </Route>
      <Route exact path={"/"}>
        {auth?<Redirect to={"/home"}/>:<Login/>}          
      </Route>
      <Route exact path={"/home"}>
          
      </Route>
    </Switch>
  )
}


export default Routes