import React from 'react';
import styled from 'styled-components';
import SubCard from './components/SubCard';

const CARD_LISTS = [
  {
    id: 2,
    title: '쉘위티켓',
    price: '20,000',
    img: 'subimg1',
    intro: '다양한 독립영화 구경하러가기',
    day: '매월 1일 결제!',
    rewards: [
      {
        reward: '매주영화티켓1장무료',
      },
      {
        reward: '매달신작영화굿즈',
      },
    ],
  },
  {
    id: 3,
    title: '쉘위박스',
    price: '25,000',
    img: 'subimg2',
    intro: '다양한 독립영화 구경하러가기',
    day: '매월 1일 결제!',
    rewards: [
      {
        reward: '매주영화티켓1장무료',
      },
      {
        reward: '매달신작영화굿즈',
      },
      {
        reward: '신작 영화 ! 시사회 초대',
      },
      {
        reward: '관람료상시 할인20%',
      },
    ],
  },
];

const Subscription = () => {
  return (
    <SubscriptionContainer>
      {CARD_LISTS.map((card) => {
        return <SubCard card={card} key={card.id} />;
      })}
    </SubscriptionContainer>
  );
};

export default Subscription;

const SubscriptionContainer = styled.div`
  width: 100%;
  height: 859px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  .mr-30 {
    margin-right: 30px;
  }
`;
