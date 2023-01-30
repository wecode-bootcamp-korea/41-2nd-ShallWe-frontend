import React from 'react';
import './App.css';
import styled from 'styled-components';

import Button from './components/Button';

import Firework from './images/firework.png';
import KakaoIcon from './images/kakao.png';
import NaverIcon from './images/naver.png';
import EmailIcon from './images/email.png';
import Footer from './Footer';

function Login() {
  return (
    <>
      <Container>
        <TextWrapper>
          <h1>
            반가워요! <Icon src={Firework} alt="firework" />
          </h1>
          <p>찾아오는 인생술. 술담화입니다!</p>
        </TextWrapper>
        <LoginWrapper>
          <Button bgColor="#ffe812" color="#342020" border="#ffe812">
            <Icon src={KakaoIcon} alt="Kakao-login" style={{ marginRight: '20px' }} />
            카카오 로그인
          </Button>
          <Button bgColor="#04D461" color="#ffffff" border="#04D461">
            <Icon src={NaverIcon} alt="Naver-login" style={{ marginRight: '20px' }} />
            네이버 로그인
          </Button>
          <Form>
            <Button bgColor="transparent" color="#0097F3" border="#0097F3">
              <Icon src={EmailIcon} alt="Email-login" style={{ marginRight: '20px' }} />
              이메일 로그인
            </Button>
          </Form>
        </LoginWrapper>
        <Footer />
      </Container>
    </>
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
