import styled from "styled-components"



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
`
export const StyledNav = styled.nav`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  height: 100px;
  min-width: 295.83px;
  max-width: 800px;
  width: 85%;
  figure{
    height: 16.92294692993164px;
    width: 122.05999755859375px;
    margin: 0px;

  }
  button{
    background-color:#212529;
    color: #FFFFFF;
    border: #212529;
    width: 79.54px;
    height: 25.58px;
  }
`

export const StyledHeader = styled.header`

`