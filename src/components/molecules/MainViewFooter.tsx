import React from 'react';
import styled from 'styled-components';

const HrDiv = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  vertical-align: baseline;
`;
const Hr = styled.hr`
  height: 1.5px;
  border: none;
  background-color: #282828;
  margin-bottom: 40px;
`;

const MainViewFooter = () => {
  return (
    <HrDiv>
      <Hr />
    </HrDiv>
  );
};

export default MainViewFooter;
