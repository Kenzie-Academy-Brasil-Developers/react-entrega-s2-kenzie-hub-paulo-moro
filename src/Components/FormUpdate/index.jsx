import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { GreyBtn, SaveBTN, StyledBtn } from "../../Styles/Button/styles";
import { StyledForm } from "../../Styles/Form/styles";

import api, { atualizarUserData } from "../../Services/api";
import axios from "axios";



function UpdateForm({closeModal, token, tech, userData, setUserData}){

  const schema = yup.object().shape({
    title:yup.string().required("Campo Obrigatório"),        
    status:yup.string().required("Campo obrigatório")    
  
  })
  const api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com",
    headers: {"Authorization":`Bearer ${token}`}
  }) 
  const { register, handleSubmit, formState:{errors} } = useForm({    
    resolver:yupResolver(schema),
    defaultValues:{
      title:tech[0].title
    }
  })   

  const updateTech = async (Data)=>{
    delete Data.title
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    await api.put(`/users/techs/${tech[0].id}`, Data)
    .catch((err)=>{
      console.log(err)
    })
    
    
    atualizarUserData(userData,setUserData)
    closeModal()
  }

  const deleteTech = async ()=>{
    
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    await api.delete(`/users/techs/${tech[0].id}`)
    .catch((err)=>{
      console.log(err)
    })

    atualizarUserData(userData,setUserData)
    closeModal()
  }

  return(
    <>
    
      <StyledForm onSubmit={handleSubmit(updateTech)} >
      <label>
        <p>Nome do Projeto</p>
        <fieldset disabled>
          <input type="text" {...register("title")} />
        </fieldset>
      </label>
      <label>
        <p>Selecione o status</p>
        <select name="status"  {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </label>
      <SaveBTN type="submit">Salvar alterações</SaveBTN>    
      <GreyBtn type="click" onClick={deleteTech}>Excluir</GreyBtn>  
    </StyledForm>
  
  </>
  )
}

export default UpdateForm