import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledBtn } from "../../Styles/Button/styles";
import { StyledForm } from "../../Styles/Form/styles";

import api from "../../Services/api";



function UpdateForm({closeModal, token, tech}){

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

  const updateTech = async (data)=>{
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    const response = await api.put(`/users/techs/${tech[0].id}`, data, header)
    .catch((err)=>{
      console.log(err)
    })
    console.log(response)
  }

  const deleteTech = async (data)=>{
    console.log(tech[0].id)
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    const response = await api.delete(`/users/techs/${tech[0].id}`, data, header).catch((err)=>{
      console.log(err)
    })
    console.log(response)
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
      <StyledBtn type="submit">Salvar alterações</StyledBtn>
      <StyledBtn onClick={deleteTech}>Excluir</StyledBtn>
    
    
  </StyledForm>
  )
}

export default UpdateForm