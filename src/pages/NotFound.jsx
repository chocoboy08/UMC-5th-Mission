import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper=styled.div({
    display:'flex',
    flexDirection:'column',
    margin:'30px 0 0 150px'
})
const Title=styled.div({
    fontSize:30,
    fontWeight:'bold'
})
const Info=styled.div({
    margin:'15px 0 5px 0'
})
const ReturnLink=styled.div({
    color:'red',
    cursor:'pointer',
    width:'fit-content'
})
function NotFound() {
    const navigate = useNavigate();

    const onClick = ()=>{
        navigate('/')
    }
  return (
    <Wrapper>
        <Title>해당 페이지를 찾지 못했습니다.</Title>
        <Info>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Info>
        <ReturnLink onClick={onClick}>메인 페이지로 이동</ReturnLink>
    </Wrapper>
  )
}

export default NotFound