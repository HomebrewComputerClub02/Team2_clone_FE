import React from 'react';
import { useForm } from 'react-hook-form';
import { IoBeerOutline, IoNewspaperOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  GoogleButton,
  H1,
  H3,
  H5,
  LabelInputDiv,
  Logo,
  LogoH1,
} from '../styled';
//signup
const Div = styled.div`
  margin: auto;
  width: 450px;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

const Form = styled.form`
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px auto;
  padding: 12px 14px;
  font-size: 16px;
  display: block;
  border: 1px solid ${(props) => props.theme.border.lightGrey};
  border-radius: 5px;
  &:hover {
    border: 1px solid ${(props) => props.theme.border.darkGrey};
  }
  ::placeholder {
    color: ${(props) => props.theme.text.darkGrey};
  }
`;

const Label = styled.label`
  font-size: 14x;
  margin: 10px 0;
  display: block;
  font-weight: ${(porps) => porps.theme.font.regular};
`;

const Button = styled.button`
  margin: 10px auto;
  background: ${(props) => props.theme.background.greenColor};
  font-size: 18px;
  font-weight: ${(props) => props.theme.font.bold};
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: var(
    --font-family,
    CircularSp,
    CircularSp-Arab,
    CircularSp-Hebr,
    CircularSp-Cyrl,
    CircularSp-Grek,
    CircularSp-Deva,
    var(--fallback-fonts, sans-serif)
  );
  padding-block: 12px;
  padding-inline: 48px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Select = styled.select`
  width: 100%;
  margin: 10px auto;
  padding: 12px 14px;
  font-size: 16px;
  display: block;
  border: 1px solid ${(props) => props.theme.border.lightGrey};
  border-radius: 5px;
  &:hover {
    border: 1px solid ${(props) => props.theme.border.darkGrey};
  }
`;
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      email2: '',
      pw: '',
      name: '',
      year: null,
      month: null,
      day: null,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log('errors', errors);
  return (
    <Div>
      <Link to="/" style={{ display: 'block', marginTop: '8vh' }}>
        <Logo>
          <IoBeerOutline size={50} color="black" />
          <LogoH1 style={{ color: 'black' }}>Homebrewtify</LogoH1>
        </Logo>
      </Link>
      <H1>Sign up for free to start listening.</H1>
      <GoogleButton>Continue With Google</GoogleButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H3>Sign up with your email address</H3>
        <LabelInputDiv>
          <Label htmlFor="email1">What&apos;s your email?</Label>
          <Input
            type="text"
            {...register('email', {
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message:
                  "This email is invalid. Make sure it's written like example@email.com",
              },
              required: 'You need to enter your email.',
            })}
          />
          <p>{errors?.email?.message}</p>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="email2">Confirm your email</Label>
          <Input
            id="email2"
            placeholder="Enter your email again."
            {...register('email2')}
          ></Input>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="pw">Create a password</Label>
          <Input
            id="pw"
            placeholder="Create a password."
            {...register('pw')}
          ></Input>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="name">What should we call you?</Label>
          <Input
            id="name"
            placeholder="Enter a profile name."
            {...register('name')}
          ></Input>
          <p>This appears on your profile.</p>
        </LabelInputDiv>
        <Label htmlFor="birthday">What&apos;s your date of birth?</Label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: '15px 0',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          >
            <p>Year</p>
            <Input id="year" placeholder="YYYY" {...register('year')}></Input>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          >
            <p>Month</p>
            <Select {...register('month')} placeholder="MM">
              {[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ].map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </Select>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          >
            <p>Day</p>
            <Input id="day" placeholder="DD" {...register('day')}></Input>
          </div>
        </div>
        <Label>What&apos;s your gender?</Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            margin: '10px 0 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <input
              type="radio"
              value={'M'}
              id="male"
              name="gender"
              style={{ display: 'block', marginRight: '10px' }}
            />
            <label
              htmlFor="male"
              style={{ fontWeight: 'bold', marginRight: '15px' }}
            >
              Male
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <input
              type="radio"
              value={'F'}
              id="female"
              name="gender"
              style={{ display: 'block', marginRight: '10px' }}
            />
            <label
              htmlFor="female"
              style={{ fontWeight: 'bold', marginRight: '15px' }}
            >
              Female
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <input
              type="radio"
              value={'U'}
              id="unknown"
              name="gender"
              style={{ display: 'block', marginRight: '10px' }}
            />
            <label
              htmlFor="unknown"
              style={{ fontWeight: 'bold', marginRight: '15px' }}
            >
              Prefer not to say
            </label>
          </div>
        </div>
        <p>
          For more detailed information on the data we will process about you
          please refer to our{' '}
          <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
            privacy policy
          </a>
          .
        </p>
        <Button
          type="submit"
          onClick={() =>
            setError('email', { type: 'focus' }, { shouldFocus: true })
          }
        >
          Sign up
        </Button>
        <H5>
          Have an account?{' '}
          <a
            href="/login"
            style={{ color: '#1CD760', textDecoration: 'underline' }}
          >
            Log in
          </a>
        </H5>
      </Form>
    </Div>
  );
}

export default SignUp;
