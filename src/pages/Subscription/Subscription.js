import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Subscription = () => {
  return (
    <SubscriptionContainer>
      <ItemCard className="mr-30">
        <Card className="mt-20" width="363px" height="405px" border="none">
          <CardImg src={require('./images/subimg1.png')} alt="subimg1" />
          <TextCard>
            <div className="header">
              <span className="bold">담화박스</span>
              <span className="blue">39,000원 / 월</span>
            </div>
            <div className="description">다양한 독립영화 구경하러가기</div>
            <div className="divider"></div>
            <div className="date-wrapper">
              <div className="date">결제일</div>
              <div>02월 13일</div>
            </div>
            <div className="date-wrapper">
              <div className="date">도착일</div>
              <div>02월 16일</div>
            </div>
            <Button
              className="button"
              width="75px"
              height="28px"
              bgColor="rgb(222, 230, 239)"
              color="#0097F3"
              fontSize="11px">
              힌트 공개
            </Button>
          </TextCard>
        </Card>
      </ItemCard>
      <ItemCard>
        <Card className="mt-20" width="363px" height="405px" border="none">
          <CardImg src={require('./images/subimg2.png')} alt="subimg2" />
          <TextCard>
            <div className="header">
              <span className="bold">담화박스</span>
              <span className="blue">39,000원 / 월</span>
            </div>
            <div className="description">다양한 독립영화 구경하러가기</div>
            <div className="divider"></div>
            <div className="date-wrapper">
              <div className="date">결제일</div>
              <div>02월 13일</div>
            </div>
            <div className="date-wrapper">
              <div className="date">도착일</div>
              <div>02월 16일</div>
            </div>
            <Button
              className="button"
              width="75px"
              height="28px"
              bgColor="rgb(222, 230, 239)"
              color="#0097F3"
              fontSize="11px">
              힌트 공개
            </Button>
          </TextCard>
        </Card>
      </ItemCard>
    </SubscriptionContainer>
  );
};

export default Subscription;

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

    font-size: 14px;
    color: rgb(112, 112, 112);
    .date {
      margin-right: 5px;
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
