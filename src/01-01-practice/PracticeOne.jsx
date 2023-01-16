import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Input from './components/Input'

const PracticeOne = () => {
  return (
    <div className='practiceOne'>
      <Button> Hello Styled-Component? </Button>
      <Input />
      <Container>
        <h1>로그인</h1>
        <label for="email">이메일</label>
        <Input type="email" id="email" class="input" placeholder="styled@codeit.kr"/>
        <label for="password">비밀번호</label>
        <Input type="password" id="password" class="input" placeholder="비밀번호"/>
      </Container>

    </div>
  )
}

export default PracticeOne


const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  ${Input} {
    box-sizing: border-box;
    display: blcok;
    margin: 8px 0 16px;
    width:100%;
  }

`
