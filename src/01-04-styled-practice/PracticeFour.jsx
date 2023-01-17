import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'
import Link from './components/Link'
import Button from './components/Button'
import Label from './components/Label'
import KakaoButton from './components/KakaoButton'
import codeitLogo from "./images/codeit.png"

const Logo = styled.img`
    display: block;
    margin: auto;
    width: 200px;
    margin-bottom: 10px;
`
const Description = styled.div`
    color: #848187;
    text-align: center;
`

const Container = styled.div`
    width: 400px;
    margin: 40px auto;

    ${Input} {
        margin-bottom:16px;
    }
    ${Button} {
        width: 100%;
        margin: 8px 0;
    }
`


const PracticeFour = () => {
  return (
    <Container>
            <Logo src={codeitLogo} alt="codeit" />
            <Description>
                회원이 아니신가요? <Link href="#"> 회원가입 하기</Link>
            </Description>
            <form>
                <Label htmlFor='email'>이메일</Label>
                <Input type="email" id="email" name="email" placeholder='styled@codeit.kr' />
                <Label htmlFor='password'>비밀번호</Label>
                <Input type="password" id="password" name="password" placeholder='password' />
                <Button type="submit" round>로그인 하기</Button>
            </form>
            <KakaoButton />
    </Container>
  )
}

export default PracticeFour

