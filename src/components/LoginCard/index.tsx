import React from "react";
import styled from "styled-components";
import Logo from "../../static/not_hack_the_north.png"
import LoginForm from "../LoginForm";

const LoginCardContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    padding: 40px 20px;
`

const Image = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    pointer-events: none;
    opacity: 0.9;

    margin-top: auto;
`

const Title = styled.span`
    font-size: 52px;
    font-weight: 600;
    margin: 30px 0;

    color: white;
`

const LoginCard = () => (
    <LoginCardContainer>
        <Image src={Logo} alt="" id="logo"/>
        <Title>Login</Title>
        <LoginForm/>
    </LoginCardContainer>
);

export default LoginCard;