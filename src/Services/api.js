import axios from "axios";

const api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com"
})

export const atualizarUserData = (data, setUserData) =>{
  axios.get(`https://kenziehub.herokuapp.com/users/${data.id}`)
  .then((response)=>{          
    if(response.data){
      localStorage.setItem("@KenzieHub:user", JSON.stringify(response.data))
      setUserData(response.data)
    }
  })
}
export default api