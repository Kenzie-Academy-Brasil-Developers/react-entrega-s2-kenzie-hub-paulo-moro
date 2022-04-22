



function FormRegister(){
    
  return(
    <form>
      <label>
        Nome
        <input type="text"  />
      </label>
      <label>
        E-mail
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        Confirmar senha
        <input type="password" />
      </label>
      
      <label>
        <select name="course_module" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </label>
      
    </form>
  )
}


export default FormRegister