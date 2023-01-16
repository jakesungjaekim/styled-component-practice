import styled from "styled-components"
import nailImg from "../images/nail.png"


const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;

  &:hover,
  &:active {
     background-color: #463770;

     ${Icon} {
      opacity: 0.2;
    }
  }

  & ${Icon} {
    margin-right: 4px;
  }

]\
`

const Button = ({children, ...buttonProps}) => {
  return(
    <StyledButton {...buttonProps}>
      <Icon src={nailImg} alt="nail" />
      {children}
    </StyledButton>
  )
}

export default Button;