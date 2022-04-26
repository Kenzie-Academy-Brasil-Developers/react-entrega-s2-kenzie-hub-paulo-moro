import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import { StyledForm } from "../../Styles/Form/styles";
import { RegBTN, StyledBtn } from "../../Styles/Button/styles";

import { toast } from "react-toastify";
import axios from "axios";
import { atualizarUserData } from "../../Services/api";



function AddForm({token, closeModal, setUserData, userData}){
  const schema = yup.object().shape({
    title:yup.string().required("Campo Obrigatório"),        
    status:yup.string().required("Campo obrigatório")    
  
  })


  const { register, handleSubmit, formState:{errors} } = useForm({    
    resolver:yupResolver(schema)
  })   

  

  const addTech = async (data) =>{    
    
    const header = {headers:{"Authorization":`Bearer ${token}`}}  
    axios.post("https://kenziehub.herokuapp.com/users/techs", data, header).catch((err)=>{
      toast.error("tech já existente, atualize a tech já existente")
    }).then((response)=>{  
      if(response && response.status === 201)     {   
        toast.success("Tech adicionada com sucesso")
        atualizarUserData(userData, setUserData)
        closeModal()
        
      }       
    })   
  }
 
  
  return(
    <StyledForm onSubmit={handleSubmit(addTech)} >
      <label>
        <p>Nome</p> {errors.title && <span>{errors.title.message}</span>}
        <input type="text" placeholder="Digite aqui a tecnologia" {...register('title')} />
      </label>
      <label>
        <p>Selecione o status</p> {errors.status && <span>{errors.status.message}</span>}
        <select name="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <RegBTN type="submit">Cadastrar Tecnologia</RegBTN>
      </label>
              
              
    </StyledForm>
  )
}

export default AddForm