import React from 'react';
import styled from 'styled-components';

const MyBox = ({ children }) => {
  return (
    <Container>
      <InfoWrapper>{children}</InfoWrapper>
    </Container>
  );
};

export default MyBox;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 1144px;
  width: 1144px;
  height: auto;
  padding: 30px 60px 50px 60px;

  border-radius: 10px;
  border: 1px solid #e0e0e0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 30px 10px 130px 10px;
  border-radius: 20px;
`;
