import styled from "styled-components"


export const StyledForm = styled.form`
    display: flex;
    width: 270px;
    flex-wrap: wrap;
    justify-content:center;    

    label{
        display: flex;
        flex-direction: column;
        
    }
    label p{
      align-self: flex-start;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 9.73988px;
      line-height: 0px;
      color: #F8F9FA;
    }
    label textarea{
      width: 247px;
      padding-left: 13px;
      font-family: 'Inter';
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      background-color: #343B41;
      resize: none;
    }
    label input{
      width: 260px;
      height: 40px;
      padding-left: 13px;
      font-family: 'Inter';
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: #868E96;
      border: 0.973988px solid #343B41;
      box-sizing: border-box;
      border-radius: 3.19812px;
      background-color: #343B41;

    }
    label select{
      width: 260px;
      height: 40px;
      padding-left: 13px;
      font-family: 'Inter';
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: #868E96;
      background-color: #343B41;
    }
    label select option{
      width: 260px;
      font-family: 'Inter';
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: #868E96;
      background-color: #343B41;
    }
    fieldset{
      border: none;
    }
`