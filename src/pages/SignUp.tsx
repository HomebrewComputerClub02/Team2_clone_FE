import React from 'react';
import {
  Logo,
  SignUpGoogleButton,
  SignUpTopContainer,
  SignUpTopH1,
} from '../styled';

function SignUp() {
  return (
    <>
      <Logo style={{ color: 'black' }}>Homebrewtify</Logo>
      <SignUpTopContainer>
        <SignUpTopH1>Sign up for free to start listening.</SignUpTopH1>
        <SignUpGoogleButton>Continue With Google</SignUpGoogleButton>
      </SignUpTopContainer>
    </>
  );
}

export default SignUp;
