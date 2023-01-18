import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled, { keyframes } from 'styled-components';
import Input from './components/Input';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box
    }

    html,
    body {
        margin: 0;
        padding: 0; 
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #111111;
    }
`;


const PracticeFive = () => {
  return (
    <>
    <GlobalStyle/>
    <div>PracticeFive</div>
    <Input loading size="large"/>
    </>
  )
}

export default PracticeFive