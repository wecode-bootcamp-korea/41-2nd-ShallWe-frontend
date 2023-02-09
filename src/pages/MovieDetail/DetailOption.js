import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailOption = ({ movieData }) => {
  const { meetings, price } = movieData;
  console.log(meetings, price);
  const [count, setCount] = useState(1);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const onCart = () => {
    fetch(`${BASE_URL}/myShallWe/pick`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        id: meetings[0].meeting_id,
        counts: count,
        price: price * count,
      }),
    }).then((response) => {
      if (response.ok === true) {
        if (window.confirm('마이페이지에 담았습니다. 마이페이지로 이동하시겠습니까?')) {
          navigate('/');
        }
        return;
      }
    });
  };

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (setCount === 1) {
      alert('최소 예약 인원은 1명 입니다');
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <MovieCart>
      <MovieQuantityWrap>
        수량
        <MovieQuantity>
          <MinusCount onClick={minusCount}>-</MinusCount>
          <Count>{count}</Count>
          <PlusCount onClick={plusCount}>+</PlusCount>
        </MovieQuantity>
      </MovieQuantityWrap>
      <TotalPriceWrap>
        총 상품가격
        <TotalPrice>{[price * count].toLocaleString()}원</TotalPrice>
      </TotalPriceWrap>
      <DeliveryWrap>
        <OptionImg src={require('./cinema.png')} />이 영화는 현재 인기상영 중!
      </DeliveryWrap>
      <ShareButton>
        <OptionImg src={require('./share.png')} />
        공유하기
      </ShareButton>

      <CartButton onClick={onCart}>마이페이지 담기</CartButton>
    </MovieCart>
  );
};

const MovieCart = styled.div`
  width: 400px;
  height: fit-content;
  max-height: 100vh;
  /* margin-top: 25px; */
  padding: 20px 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
  font-weight: bold;
  color: rgb(112, 112, 112);
`;

const MovieQuantityWrap = styled.div`
  display: grid;
  gap: 20px;
`;

const MovieQuantity = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid rgb(224, 224, 224);
  text-align: left;
  font-size: 13px;
`;

const MinusCount = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 30%;
  height: 100%;
  border-right: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  font-size: 30px;
`;

const Count = styled.div``;

const PlusCount = styled(MinusCount)`
  border-left: 1px solid rgb(224, 224, 224);
  margin-top: 1px;
  font-size: 25px;
  cursor: pointer;
`;

const TotalPriceWrap = styled.div``;

const TotalPrice = styled(MovieQuantity)`
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

const DeliveryWrap = styled(MovieQuantity)`
  justify-content: left;
  padding: 10px;
  margin-top: 10px;
  margin-left: -3px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #1189e6;
`;
const OptionImg = styled.img`
  margin-right: 10px;
  width: 25px;
`;
const CartButton = styled.button`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 100%;
  height: 55px;
  background-color: #0697f3;
  border-radius: 7px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const ShareButton = styled(CartButton)`
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid #b2b2b2;
  background-color: #0697f3;
  color: #f7f7f7;
`;

export default DetailOption;
