import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Input from './components/Input'

const PracticeTwo = () => {
  return (
    <Container>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근 버튼</h1>
      <Button size="small" round>
        round small
      </Button>
      <Button size="medium" round>
        round medium
      </Button>
      <Button size="large" round>
        round large
      </Button>

      <h1>사이즈</h1>
      <Input size="small"/>
      <Input size="medium"/>
      <Input size="large"/>
      <h1>Round</h1>
      <Input round />
      <h1>Error</h1>
      <Input error />
      


    </Container>
  )
}

export default PracticeTwo


const Container = styled.div`
  margin: 0 auto;
  width: 700px;

  ${Button} {
    margin-right: 10px;
  }

  ${Input} {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`


