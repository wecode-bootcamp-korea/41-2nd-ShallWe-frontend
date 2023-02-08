import React from 'react';
import MyBox from './MyBox';
import styled from 'styled-components';

const Call = () => {
  return (
    <div>
      <MyBox>
        <Ready>현재 페이지는 준비중입니다.. ㅠㅠ..</Ready>
      </MyBox>
    </div>
  );
};

export default Call;

const Ready = styled.p`
  font-size: 14px;
  color: #707070;
  margin-top: 15px;
`;
