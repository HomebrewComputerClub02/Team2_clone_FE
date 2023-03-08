import styled from 'styled-components';
export const Blue = styled.div`
  background: ${(props) => props.theme.background.blueColor};
  width: 100vw;
  height: 100vh;
`;

export const Test400 = styled.p`
  font-weight: ${(props) => props.theme.font.light};
  border: 1px solid ${(props) => props.theme.border.ligthGrey};
`;

export const Test700 = styled.p`
font-weight: ${(props) => props.theme.font.bold};
background: ${(props) => props.theme.icons.whiteColor}}
`;
