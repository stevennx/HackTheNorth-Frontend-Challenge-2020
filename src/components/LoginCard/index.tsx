import React from "react";
import styled from "styled-components";
import Logo from "../../static/not_hack_the_north.png"
import LoginForm from "../LoginForm";

const LoginCardContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

const Image = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`

const Title = styled.span`
    font-size: 48px;
    font-weight: 600;
    margin: 20px 0;

    color: white;
`

const LoginCard = () => (
    <LoginCardContainer>
        <Image src={Logo} alt=""/>
        <Title>Login</Title>
        <LoginForm/>
        <div></div>
    </LoginCardContainer>
);

export default LoginCard;