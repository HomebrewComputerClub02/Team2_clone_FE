import styled from 'styled-components';
import { IoBeerOutline } from 'react-icons/io5';

//topbar
export const TopBarContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.background.blackColor};
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

export const LinkForTopBar = styled.h1`
  font-weight: ${(props) => props.theme.font.regular};
  color: white;
  font-size: 1rem;
  &:hover {
    color: ${(props) => props.theme.text.greenColor};
  }
`;

//hombrewtify.tsx
export const HomeBackgroundLoggedIn = styled.div`
  background: url('images/Home.png') no-repeat center;
  height: 70vh;
  width: 100vw;
  background-size: 100vw 70vh;
`;

export const HomeBackgroundLoggedOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10vw;
  background: ${(props) => props.theme.background.pinkColor};
  height: 70vh;
  width: 100vw;
  background-size: 100vw 70vh;
`;

export const BackgroundTitle = styled.h1`
  color: black;
  font-size: 3.6rem;
  font-weight: ${(props) => props.theme.font.Bold};
`;

export const BackgroundP = styled.p`
  color: balck;
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.font.light};
`;

export const HomeFooterContainer = styled.div`
  background: ${(props) => props.theme.background.blackColor};
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 10vw;
  width: 100vw;
  height: 40vh;
`;

export const BackgroundButton = styled.div`
  margin: 1vw;
  padding-left: 5vw;
  color: white;
  width: 15vw;
  height: 6vh;
  background: ${(props) => props.theme.background.blackColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border.greyColor};
  border-radius: 10px;
  color: white;
  background-image: url('images/appleLogo.png');
  background-repeat: no-repeat;
  background-position: -10 1;
  background-size: 8vh 8vh;
`;

export const BackgroundButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundSmallP = styled.p`
  font-weight: ${(props) => props.theme.font.light}
  font-size: 0.7rem;
  color: black;
`;

//home footer
export const HomeFooterColumn = styled.div`
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const HomeFooterColumnTitle = styled.h1`
  color: ${(props) => props.theme.text.greyColor};
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 1rem;
`;

export const LinkForFooter = styled.h1`
  font-size: 1rem;
  color: white;
  font-weight: ${(props) => props.theme.font.light};
  &:hover {
    color: ${(props) => props.theme.text.greenColor};
  }
`;

//for all
export const Logo = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: ${(props) => props.theme.font.bold};
  display: flex;
  justify-content: center;
`;

//signup
export const SignUpTopContainer = styled.div`
  margin: auto;
  width: 40vw;
  height: 30vh;
  background: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.text.blackColor};
`;

export const SignUpTopH1 = styled.h1`
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 2rem;
  display: block;
  width: 100%;
`;

export const SignUpGoogleButton = styled.div`
  background: url('images/GoogleLogo.png') no-repeat 10% 40%;
  background-size: 3vh;
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 1.2rem;
  width: 100%;
  color: ${(props) => props.theme.text.greyColor};
  border: 1px solid ${(props) => props.theme.border.greyColor};
  border-radius: 30px;
  padding: 1vh 5vw;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
`;
