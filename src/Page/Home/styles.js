import styled from "styled-components"

export const UserSection = styled.section`
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;;
    background-color: #121214;
    min-width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    flex-wrap: wrap;
    h1{
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #F8F9FA;
      margin-left: 12px;
    }
    
    button{
      margin-right: 13.8px;
      background-color: #212529;
      border-radius: 4px;
      color: #FFFFFF;
      border: none;
    }
`

export const StyledContainer = styled.main`
  background-color: #212529;
  display: flex;
  flex-direction: column;
  width: 295.83px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
  h1{
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #F8F9FA;
    
  }
 
  span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868E96;
  }
  label{
    margin-top: 20px;
  }
  button{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  form+p{
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #868E96;

  }
  p+button{
    background-color: #868E96;
    margin: 20px 0px 35px 0px;
    border: #868E96;
  }
  ul{
    padding: 22px 19px;
    margin-top: 0px;
    
  }
  li{
    list-style:none;
    display: flex;
    justify-content: space-between;
    background-color: #121214;
    
    height: 50px;
    align-items: center;
    margin-top:16px;
    border-radius: 4.06066px;
  }
  li h2{
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #F8F9FA;
    margin: 12.182px;

  }
  li span{
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    margin: 12.182px;

  }
`
export const StyledNav = styled.nav`
  display: flex;
  width: 320px;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  figure{
    height: 16.92294692993164px;
    width: 122.05999755859375px;
    margin: 0px;

  }
  button{
    background-color:#212529;
    color: #FFFFFF;
    border: #212529;
    width: 55.49px;
    height: 32px;
  }
`
export const StyledHeader = styled.header`
  display: flex;
    justify-content: space-between;
    align-items: center;    
    flex-wrap: wrap;

  h1{
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #F8F9FA;
      margin-left: 12px;
    }
    span{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 9.59437px;
      line-height: 18px;
      color: #868E96;
      margin-left: 12px;
      margin-right: 45px;
    }
`

export const StyledTechs = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0,.5);
      position: fixed;
      top: 0px;
      right: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
  
    section{
      display: flex;
      justify-content: space-between;
      background-color: #343B41;
      padding: 10px 16px 10px 16px;
      border-radius: 3.20867px 3.20867px 0px 0px;
      align-items: center;
    }
    section h1{
      font-family: 'Inter';
      font-size: 11px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #FFFFFF;
      margin: 0px;
      
    }
    section button{
      background-color: #343B41;
      color: #FFFFFF;
      border: none;
      margin-top: 0px;
    }
    form{
      background-color: #212529;
      padding: 17px;
    }
    form label{
      margin-top: 17px;
      flex-direction: row;
      flex-wrap: wrap;
      
    }
    form label span{
      margin-left:10px;
      font-family: 'Inter';
      font-size: 11px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #FF577F;
      
    }
    form p{
      color:#F8F9FA;
    }
    label input{
      margin-top: 17px;
      color: #F8F9FA;;
    }
    form label select{
      margin-top: 17px;
      color:#F8F9FA;
     
    }
    label select option{
      color:#F8F9FA;
    }
   
    button{
      background-color: #FF577F;
      margin-top: 17px;
    }
 
`


