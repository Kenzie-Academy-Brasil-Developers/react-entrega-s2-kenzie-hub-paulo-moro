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

  const { register, handleSubmit, formState:{errors} } = useForm({    
    resolver:yupResolver(schema),
    defaultValues:{
      title:tech[0].title
    }
  })   

  const updateTech = async (Data)=>{
    delete Data.title
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    const response = await api.put(`/users/techs/${tech[0].id}`, Data, header)
    .catch((err)=>{
      console.log(err)
    })
    
    atualizarUserData(userData,setUserData)
    closeModal()
  }

  const deleteTech = ()=>{
    
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    axios.delete(`https://kenziehub.herokuapp.com/users/techs/${tech[0].id}`, header)
    .catch((err)=>{
      console.log(err)
    })

    atualizarUserData(userData,setUserData)
    closeModal()
  }

  return(
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
      <GreyBtn onClick={()=>deleteTech()}>Excluir</GreyBtn>
    
    
  </StyledForm>
  )
}

export default UpdateForm