import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { API } from '../../config';

import styled from 'styled-components';
import payment from '../../assets/images/payment.png';

const KakaoPay = ({ totalSumPrice, pickMovieList }) => {
  const accessToken = localStorage.getItem('token') ?? '';

  const autoKakaPay = () => {
    fetch(`${API.KAKAOPAY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: pickMovieList[0].name,
        pickId: [pickMovieList[0].id],
        totalPrice: totalSumPrice,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.href = result.url;
        window.alert('결제 성공했습니다!');
      })
      .catch(window.alert('결제 실패했습니다.'));
  };

  return <PaymentImg src={payment} alt="payment" onClick={autoKakaPay} />;
};

export default KakaoPay;

const PaymentImg = styled.img`
  height: 40px;
`;
