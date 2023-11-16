import React, { useState } from 'react'
import { styled } from 'styled-components';

const Login=styled.div({
    display:'flex',
    gap:10,
    marginLeft:20
})
const LoginBtn=styled.button({
    backgroundColor:'white',
    width:70,
    borderStyle:'none',
    borderRadius:10
})
const LoginMessage=styled.div({
    color:"white"
})
function LoginControl() {
    const [isLogined,setIsLogined]=useState(false);
    const handleLoginClick = ()=>{
        setIsLogined(!isLogined);
    }
  return (
    <Login>
        <LoginBtn onClick={handleLoginClick}>{isLogined?"로그아웃":"로그인"}</LoginBtn>
        <LoginMessage>{isLogined?"환영합니다!":"로그인 해주세요!"}</LoginMessage>
    </Login>
  )
}

export default LoginControl