import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Input from './components/Input'

const Container = styled.div`

    width: 250px;
    height: 250px;
    border: 1px solid blue;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    ${Button} {
        border-radius: 10px;
    }

    ${Input} {
        margin-top: 10px;
    }

`


const Two = () => {
  return (
    <Container>
        <Button>
            Hello? StyledCompoent
        </Button>
        <Input/>
    </Container>
  )
}

export default Two
