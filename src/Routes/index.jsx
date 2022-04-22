import { Redirect } from "react-router-dom";
import { Switch,Route } from "react-router-dom";
import FormRegister from "../Components/FormRegister";


function Routes({auth}){
  <Switch>
    <Route exact path={"/Register"}>

    </Route>
    <Route exact path={"/"}>
      {auth?<Redirect to={"/home"}/>:<FormRegister/>}
        
    </Route>
    <Route exact path={"/home"}>
        
    </Route>
  </Switch>
}