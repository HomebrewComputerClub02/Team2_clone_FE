import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoBeerOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  ErrorMsg,
  GoogleButton,
  H1,
  H3,
  LabelInputDiv,
  Logo,
  LogoH1,
} from '../styled';
import styled from 'styled-components';
import axios from 'axios';
import { loginUser } from '../stores/api';
import { useNavigate } from 'react-router-dom';
import AuthService from '../stores/AuthService';

const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  @media (max-width: 440px) {
    width: 80%;
  }
`;

const Label = styled.label`
  font-weight: ${(props) => props.theme.font.bold};
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  &:focus {
    box-shadow: 0px 0px 2px red;
  }
`;
const Hr = styled.hr``;
const LogInButton = styled.button`
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 18px;
  background: ${(props) => props.theme.background.greenColor};
  border: none;
  width: 30%;
  height: 4vh;
  border-radius: 200px;
  &:hover {
    transform: scale(1.1);
  }
`;
const SignUpButton = styled.button`
  font-size: 20px;
  font-weight: ${(props) => props.theme.font.light};
  background: white;
  color: ${(props) => props.theme.border.lightGrey};
  border: 1.5px solid ${(props) => props.theme.border.lightGrey};
  border-radius: 200px;
  width: 100%;
  height: 5vh;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    border: 1.5px solid black;
  }
`;
const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;

  &:checked {
    background-color: ${(props) => props.theme.background.greenColor};
  }
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: block;
  text-decoration: underline;
  color: ${(props) => props.theme.border.darkGrey};
  font-weight: ${(props) => props.theme.font.light};
  margin: 30px 0;
  &:hover {
    color: ${(props) => props.theme.background.greenColor};
  }
`;
interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LogIn: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      pw: '',
    },
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const onSubmitData = async (data: any) => {
      // return response.data;
      try {
        const token = await AuthService.login(data);
        onLoginSuccess();
        navigate('/');
      } catch (error) {
        setError('Invalid email or password');
      }
    };
    onSubmitData(data);
  };

  return (
    <>
      <Link to="/" style={{ display: 'block', marginTop: '8vh' }}>
        <Logo>
          <IoBeerOutline size={50} color="black" />
          <LogoH1 style={{ color: 'black' }}>Homebrewtify</LogoH1>
        </Logo>
      </Link>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>To continue, log in to Spotify.</H1>
        <GoogleButton>Continue With Google</GoogleButton>
        <p>or</p>
        <Hr />
        <LabelInputDiv>
          <Label htmlFor="email">Email address or username</Label>
          <Input
            placeholder="Email address or username"
            {...register('email', {
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message:
                  "This email is invalid. Make sure it's written like example@email.com",
              },
              required: 'You need to enter your email.',
            })}
          ></Input>
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="pw">Email address or username</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register('pw', { required: 'You need to enter a password.' })}
          ></Input>
          <ErrorMsg>{errors?.pw?.message}</ErrorMsg>
        </LabelInputDiv>
        <Button as="a" href="#">
          Forgot your password?
        </Button>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '30%',
            }}
          >
            <p>Rememeber me</p>
            <CheckBox />
          </div>
          <LogInButton onClick={onSubmit}>Log In</LogInButton>
          {error && <div>{error}</div>}
        </div>
        <Hr />
        <H3>Don&apos;t have an account?</H3>
        <SignUpButton>Sign up for Homebrewtify</SignUpButton>
      </Form>
    </>
  );
};

export default LogIn;
