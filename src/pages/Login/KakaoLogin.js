import React, { useEffect, useState } from 'react';
import { API } from '../../config';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../assets/images/spinner.gif';

const KakaoLogin = () => {
  const navigate = useNavigate();

  const autoKakaLogin = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    fetch(`${API.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 200) {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인에 성공했습니다');
          navigate('/');
        } else {
          alert('로그인에 실패하였습니다.');
          navigate('/');
        }
      });
  };

  useEffect(() => {
    autoKakaLogin();
  }, []);

  return (
    <SpinnerContainer>
      <SpinnerImg src={Spinner} alt="spinner(로딩중)" />
    </SpinnerContainer>
  );
};

export default KakaoLogin;

const SpinnerImg = styled.img`
  width: 200px;
  height: 200px;
`;

const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
`;
