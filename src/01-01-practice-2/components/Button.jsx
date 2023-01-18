import styled from "styled-components";

import nailImg from '../images/nail.png';

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;


const StyledButton = styled.button`
    background-color: #6750a4;
    border: none;
    border-radius: 13px;
    color: #ffffff;
    padding: 1rem;

    ${Icon} {
        margin-right: 7px;
    }

    transition: all 1.0s;
    &:hover, 
    &:active {
        background-color: black;
    }
`

const Button = ({children, ...buttonProps}) => {

    return(
        <StyledButton {...buttonProps}>
            <Icon src={nailImg} alt="nail"/>
            {children}
        </StyledButton>
    )
}

export default Button;
