import React, { useState } from "react";
import styled from "styled-components";
import { Props } from "./index";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  width: 60%;

  label,
  input {
    display: block;
    width: 100%;
  }
`;

const Label = styled.label`
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;

  color: white;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #777;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: rgb(70, 153, 179);
  color: white;
  border-radius: 5px;
  border: 1px solid rgb(70, 153, 179);
  background-color: 250ms;

  :hover {
    cursor: pointer;
    background-color: black;
    color: rgb(70, 153, 179);
  }
`;

const Form: React.FC<Props> = ({ loginAction }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    setEmail(element.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    setPassword(element.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginAction({ email: email, password: password });
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />

      <Label htmlFor="email">Password</Label>
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit">Login</Button>
    </FormContainer>
  );
};

export default Form;
