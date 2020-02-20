import React, { useState } from "react";
import styled from "styled-components";
import { Props } from "./index";
import { useHistory } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  width: 60%;
  margin-bottom: auto;

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
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #20293c;
  background-color: #20293c;
  color: #8a9eb2;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #1bd6bd;
  color: white;
  border-radius: 5px;
  border: 1px solid #1bd6bd;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;

  :hover {
    cursor: pointer;
    background-color: black;
    color: #1bd6bd;
  }
`;

const Form: React.FC<Props> = ({ loginAction }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useHistory();

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
    loginAction({ email: email, password: password, history: history});
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />

      <Label htmlFor="email">Password</Label>
      <Input
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit">LOGIN</Button>
    </FormContainer>
  );
};

export default React.memo(Form);
