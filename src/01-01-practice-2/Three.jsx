import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'



const Container = styled.div`
    margin: 0 auto;
    width: 400px;

    ${Input} {
        box-sizing: border-box;
        display: block; 
        margin: 8px 0 16px;
        width: 100%;
    }
`

const Three = () => {
  return (
    <Container>
        <h1>로그인</h1>
        <label>아이디</label>
        <Input placeholder='ID@codeit.com'/>
        <label>비밀번호</label>
        <Input placeholder='Password'/>
    </Container>
  )
}

export default Three