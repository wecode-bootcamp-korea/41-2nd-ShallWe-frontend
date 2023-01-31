import React from 'react';
import { KAKAO_OAUTH_URL } from './OAUTH';

import styled from 'styled-components';
import Button from '../../components/Button';

import Firework from './images/firework.png';
import KakaoIcon from './images/kakao.png';
import NaverIcon from './images/naver.png';

function Login() {
  return (
    <Container>
      <TextWrapper>
        <h1>
          반가워요! <Icon src={Firework} alt="firework" />
        </h1>
        <p>Shall we watch the independent film?</p>
      </TextWrapper>
      <LoginWrapper>
        <a href={KAKAO_OAUTH_URL}>
          <Button bgColor="#ffe812" color="#342020" border="#ffe812" className="button">
            <Icon src={KakaoIcon} alt="Kakao" style={{ marginRight: '20px' }} />
            카카오 로그인
          </Button>
        </a>
        <Button bgColor="#04D461" color="#ffffff" border="#04D461">
          <Icon src={NaverIcon} alt="Kakao" style={{ marginRight: '20px' }} />
          네이버 로그인
        </Button>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 335px;
  height: 90px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 10px;
  }

  ${Icon} {
    width: 30px;
    height: 30px;
  }

  p {
    font-size: 16px;
    color: #707070;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 30vh;
  padding: 10px;

  ${TextWrapper} {
    margin-bottom: 64px;
  }
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
  }
`;
