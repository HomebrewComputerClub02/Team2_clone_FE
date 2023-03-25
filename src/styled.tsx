import { IoBeerOutline } from 'react-icons/io5';
import styled from 'styled-components';

//for all
export const Logo = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    margin: 10px;
    transform: scale(0.6);
  }
`;

export const LogoH1 = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: ${(props) => props.theme.font.bold};
`;

export const GoogleButton = styled.button`
  background: url('images/GoogleLogo.png') no-repeat;
  background-size: 30px;
  background-position: left 70px center;
  color: ${(props) => props.theme.border.lightGrey};
  border: 1px solid ${(props) => props.theme.border.lightGrey};
  width: 100%;
  height: 5vh;
  border-radius: 400px;
  font-size: 18px;
  font-weight: ${(porps) => porps.theme.font.regular};
  margin: 10px 0;
  &:hover {
    transform: scale(1.05); /* increase the button size by 10% */
  }
  &:focus {
    border: 2px solid black;
  }
  @media screen and (max-width: 450px) {
    background-position: left 10% center;
    font-size: 12px;
    background-size: 20px;
  }
`;
export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 15px 0;
`;

export const H1 = styled.h1`
  text-align: center;
  margin: 20px auto;
  font-weight: ${(props) => props.theme.font.bold};
  display: block;
  width: 100%;
  @media screen and (min-width: 800px) {
    font-size: 25px;
  }
  @media screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 18px;
  }
  @media (max-width: 399px) {
    font-size: 14px;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 30px;
  font-weight: ${(props) => props.theme.font.bold};
  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
  @media screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 16px;
  }
  @media (max-width: 399px) {
    font-size: 12px;
  }
`;

export const H5 = styled.h5`
  font-size: 14px;
  text-align: center;
  margin: 30px;
  font-weight: ${(props) => props.theme.font.bold};
  @media screen and (min-width: 800px) {
    font-size: 14px;
  }
  @media screen and (min-width: 400px) and (max-width: 799px) {
    font-size: 12px;
  }
  @media (max-width: 399px) {
    font-size: 10px;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
`;
