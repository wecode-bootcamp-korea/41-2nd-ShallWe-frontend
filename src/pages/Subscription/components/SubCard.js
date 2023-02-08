import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config';

const SubCard = ({ card }) => {
  const navigate = useNavigate();

  const autoKakaPay = (id) => {
    fetch(`${API.SUBSCRIPTION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTU4NDcyNX0.tylNeMdSFT6iAxe6kJyfuoDpKduEoik4kTYM_PfiW1c',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        subscriptionTypeId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.href = result.url;
      });
  };

  return (
    <ItemCard className="mr-30">
      <Card className="mt-20" width="363px" height="405px" border="none">
        <CardImg src={require(`../images/${card.img}.png`)} alt="subimg1" />
        <TextCard>
          <div className="header">
            <span className="bold">{card.title}</span>
            <span className="blue">
              {card.price}원 / {card.day}
            </span>
          </div>
          <div
            className="description"
            onClick={() => {
              navigate('/category');
            }}>
            {card.intro} {'>'}
          </div>
          <div className="divider"></div>
          <div className="date-wrapper">
            {card['rewards'].map((reward) => {
              return <span>{reward.reward}</span>;
            })}
          </div>
          <Button
            className="button"
            width="75px"
            height="28px"
            bgColor="rgb(222, 230, 239)"
            color="#0097F3"
            fontSize="11px"
            onClick={() => {
              autoKakaPay(card.id);
            }}>
            후원하기
          </Button>
        </TextCard>
      </Card>
    </ItemCard>
  );
};

export default SubCard;

const TextCard = styled.div`
  position: absolute;
  bottom: 38.94px;
  left: 14px;

  width: 335px;
  height: 208px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;

  line-height: 1.5715;

  .header {
    display: flex;
    align-items: center;

    .bold {
      font-size: 20px;
      font-weight: bold;
      margin-right: 20px;
      color: #707070;
    }
    .blue {
      font-size: 15px;
      font-weight: bold;
      color: #0097f3;
    }
  }

  .description {
    margin-top: 8px;
    font-size: 16px;
    color: #707070;
    text-decoration: none;
  }

  .divider {
    width: 20px;
    height: 1px;
    border: 1px solid rgb(224, 224, 224);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .date-wrapper {
    display: flex;
    justify-content: space-around;
    font-size: 11px;
    color: rgb(112, 112, 112);

    span {
      width: 20%;
      height: 40px;
      overflow-wrap: break-word;

      &:hover {
        color: orange;
      }
    }
  }
  .button {
    margin-top: 10px;
    border: none;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ItemCard = styled.div`
  position: relative;
  width: 363px;
  height: 609px;
  cursor: pointer;

  .mt-20 {
    margin-top: 20px;
  }
`;
