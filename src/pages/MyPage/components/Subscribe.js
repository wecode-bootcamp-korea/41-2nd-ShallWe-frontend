import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config';
import MyBox from './MyBox';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    fetch(`${API.SUBSCRIBE}`, {
      method: 'GET',
      headers: {
        Authorization: window.localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => setSubscribe(result.data));
  }, []);

  const cancelSubscribe = (id) => {
    fetch(`${API.REFUNDS}`, {
      method: 'POST',
      headers: {
        Authorization: window.localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriptionId: id,
      }),
    });
    alert('구독이 취소 되었습니다! ㅠㅠ...');
  };

  return (
    <MyContainer>
      <MyBox className="flex">
        {subscribe.map((item) => {
          return (
            <ItemCard className="mr-30">
              <Card className="mt-20" width="363px" height="405px" border="none">
                <CardImg src={require('../images/subscribe.jpeg')} alt="subimg1" />
                <TextCard>
                  <div className="header">
                    <span className="bold">{item.subscription_title}</span>
                  </div>
                  <div className="divider"></div>
                  <div>{item.subscription_text}</div>
                  <Button
                    className="button"
                    width="75px"
                    height="28px"
                    bgColor="rgb(222, 230, 239)"
                    color="#0097F3"
                    fontSize="11px"
                    onClick={() => {
                      cancelSubscribe(item.subscription_id);
                    }}>
                    구독취소
                  </Button>
                </TextCard>
              </Card>
            </ItemCard>
          );
        })}
      </MyBox>
    </MyContainer>
  );
};

export default Subscribe;

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

const MyContainer = styled.div`
  ${MyBox} {
    display: flex;
    flex-direction: row;
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
