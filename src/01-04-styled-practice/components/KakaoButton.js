import styled from "styled-components";
import kakaoIcon from '../images/kakao.svg'
import Button from "./Button";


const Icon = styled.img`
    height: 24px;
    width: 24px;
`

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee500;
    color: rgba(0,0,0, 0.8);

    ${Icon} {
        margin-right: 8px;
    }

    &:hover {
        background-color: #fee500;
    }
`

const KakaoButton = ({ className }) => {

    return(
        <StyledButton className={className}>
            <Icon src={kakaoIcon} alt="KakaoIcon"/>
            카카오 로그인
        </StyledButton>
    )
}

export default KakaoButton;



