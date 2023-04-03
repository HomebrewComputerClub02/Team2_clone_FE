import { PlayForWork } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoBeerOutline, IoNewspaperOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthService from '../stores/AuthService';
import { getDaysInMonth } from '../stores/functions';
import {
  ErrorMsg,
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

interface SignupFormProps {
  onSignupSuccess: () => void;
}
const SignUp: React.FC<{ onSignupSuccess: () => void }> = ({
  onSignupSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      email2: '',
      pw: '',
      name: '',
      year: '',
      month: '',
      day: '',
      gender: '',
    },
  });
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string>('');
  const onSubmit = (data: any) => {
    const submitData = async (data: any) => {
      try {
        console.log('data');
        await AuthService.signup(data);
        onSignupSuccess();
        navigate('/');
      } catch (error: any) {
        setFormError(error.response.data.message);
      }
    };
    const result = submitData(data);
    console.log(result);
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
            placeholder="Enter your email."
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
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="email2">Confirm your email</Label>
          <Input
            id="email2"
            placeholder="Enter your email again."
            {...register('email2', {
              required: 'You need to confirm your email.',
              validate: {
                matchesPreviousEmail: (value) => {
                  const { email } = getValues();
                  return email === value || `The email addresses don't match.`;
                },
              },
            })}
          ></Input>
          <ErrorMsg>{errors?.email2?.message}</ErrorMsg>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="pw">Create a password</Label>
          <Input
            id="pw"
            placeholder="Create a password."
            {...register('pw', { required: 'You need to enter a password.' })}
          ></Input>
          <ErrorMsg>{errors?.pw?.message}</ErrorMsg>
        </LabelInputDiv>
        <LabelInputDiv>
          <Label htmlFor="name">What should we call you?</Label>
          <Input
            id="name"
            placeholder="Enter a profile name."
            {...register('name', {
              required: 'Enter a name for your profile.',
            })}
          ></Input>
          <ErrorMsg>{errors?.name?.message}</ErrorMsg>
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
            <Input
              id="year"
              placeholder="YYYY"
              {...register('year', {
                required: 'Enter a valid year.',
              })}
            ></Input>
            <ErrorMsg>{errors?.year?.message}</ErrorMsg>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          >
            <p>Month</p>
            <Select
              {...register('month', {
                required: 'Select your birth month.',
              })}
              placeholder="MM"
            >
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
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </Select>
            <ErrorMsg>{errors?.month?.message}</ErrorMsg>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          >
            <p>Day</p>
            <Input
              id="day"
              placeholder="DD"
              {...register('day', {
                required: 'Enter a valid day of the month.',
                validate: {
                  correctDate: (value) => {
                    const { year } = getValues();
                    const { month } = getValues();
                    const Date = getDaysInMonth(Number(month), Number(year));
                    console.log(year, month, 'Date', Date);
                    // return email === value || `The email addresses don't match.`;
                    return (
                      (Number(value) <= Date && Number(value) >= 1) ||
                      'Enter a valid day of the month.'
                    );
                  },
                },
              })}
            ></Input>
            {/* {errors.name && errors.name.type === 'required' && (
              <span>This is required</span>
            )} */}
            {errors.day && <ErrorMsg>{errors.day.message}</ErrorMsg>}
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
              {...register('gender')}
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
              {...register('gender')}
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
              {...register('gender')}
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
        {formError && <div>{formError}</div>}
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
};

export default SignUp;
