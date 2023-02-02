import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import timer from './images/Timer.png';
import { AiOutlineRight } from 'react-icons/ai';

function LimitBox() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch('/data/movie.json')
      .then((result) => result.json())
      .then((data) => setMovieData(data[0]));
  }, []);

  return (
    <>
      <LimitContainer>
        <LimitTop>
          <LimitTitle>
            <img src={timer} alt="시계" />
            <span> 빨리오세요! </span>
          </LimitTitle>
          <LimitTitleRight> 시간이 지나면 자리가 없어져요! </LimitTitleRight>
        </LimitTop>
        <LimitContent>
          <LimitImg src={movieData.imageUrl} />
          <LimitDescriptionWrapper>
            <LimitDescription>
              <LimitRedZone>
                <span>잔여: </span>
              </LimitRedZone>
              <Description>
                <span> 멜로 </span>
                <span> 사랑하는 사람을 창문을 통해 기다리는 겨울 </span>
                <DescriptionLocation>
                  <span> 9월 13일 14:30 </span>
                  <span> 위코드 선릉 CGV </span>
                </DescriptionLocation>
              </Description>
              <div>
                <ProductName>{movieData.name}</ProductName>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
              <LimitBottom>{movieData.price}원</LimitBottom>
            </LimitDescription>
          </LimitDescriptionWrapper>
        </LimitContent>
      </LimitContainer>
    </>
  );
}

export default LimitBox;

const LimitContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const LimitTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const LimitTitle = styled.div`
  align-items: center;
  height: 50px;
  display: flex;
  img {
    width: 29px;
    height: 29px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
  }
`;

const LimitTitleRight = styled.div`
  justify-content: center;
  background-color: red;
  padding: 10px 10px;
  color: white;
  border-radius: 15px 15px 0px 15px;
  font-size: 13px;
  margin-left: auto;
  font-weight: nomal;
  border-style: none;
`;

const LimitContent = styled.div`
  ${theme.common.flexCenter}
  width: 1200px;
  height: 800px;
  max-height: 360px;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(62, 62, 62);
  cursor: pointer;
`;

const LimitImg = styled.img`
  width: 540px;
  height: 100%;
  object-fit: contain;
`;

const LimitDescriptionWrapper = styled.div`
  width: 58%;
  height: 100%;
  ${theme.common.flexCenter}
`;

const LimitDescription = styled.div`
  width: 82%;
  height: 300px;
  max-height: 935px;
  text-align: left;
  flex-direction: column;
  padding: auto;

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    div {
      color: white;
    }
  }
`;

const LimitRedZone = styled.div`
  width: 80px;
  height: 24px;
  border-radius: 4px;
  background-color: rgb(211, 57, 57);
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-bottom: 8px;
  span {
    margin: auto;
  }
`;

const Description = styled.div`
  color: rgb(196, 196, 196);
  font-weight: normal;
  margin-bottom: 4px;
  font-size: 15px;
  flex-direction: column;
  span {
    margin: 5px 0;
  }
`;

const DescriptionLocation = styled.div`
  color: white;
  flex-direction: column;
  span {
    font-size: 15px;
    margin: 7px 0;
  }
`;

const ProductName = styled.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 550;
`;

const LimitBottom = styled.div`
  margin-top: 10px;
  border-top: 1px solid rgb(112, 112, 112);
  padding-top: 14px;
  justify-content: space-between;
  font-size: 23px;
  font-weight: bold;
  color: rgb(255, 255, 255);
`;
