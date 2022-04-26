import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import { StyledForm } from "../../Styles/Form/styles";
import { StyledBtn } from "../../Styles/Button/styles";

import api from "../../Services/api";
import { toast } from "react-toastify";



function AddForm({token}){
  const schema = yup.object().shape({
    title:yup.string().required("Campo Obrigatório"),        
    status:yup.string().required("Campo obrigatório")    
  
  })

  const { register, handleSubmit, formState:{errors} } = useForm({    
    resolver:yupResolver(schema)
  })   
  const addTech = async (data) =>{    
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    await api.post("/users/techs", data, header).catch((err)=>{
      
      if(err.message === "User Already have this technology created, you can only update it"){
        toast.error("tech já existente, atualize a tech já existente")
      }

    }).then((response)=>{       
      if(response.status === 201){
        toast.success("Tech adicionada com sucesso")
      }        
    })
 
  }
  return(
    <StyledForm onSubmit={handleSubmit(addTech)} >
      <label>
        <p>Nome</p> {errors.title && <span>{errors.title.message}</span>}
        <input type="text" {...register('title')} />
      </label>
      <label>
        <p>Selecione o status</p> {errors.status && <span>{errors.status.message}</span>}
        <select name="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <StyledBtn type="submit">Cadastrar Tecnologia</StyledBtn>
      </label>
              
              
    </StyledForm>
  )
}

export default AddForm