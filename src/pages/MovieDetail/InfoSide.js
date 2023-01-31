import React from 'react';
import styled from 'styled-components';

const InfoSide = ({ movieData }) => {
  const { name, price, description, location, imageUrl, genre, date } = movieData;

  return (
    <Detail>
      <MovieInfoWrap>
        <MovieInfoImg>
          <MovieImg src={imageUrl} alt={name} />
        </MovieInfoImg>
        <MovieInfoText>
          <MovieInfoName>{name}</MovieInfoName>
          <MovieInfoDescription>
            {description}충격멜로,주인공의 스테이지 퍼포먼스
          </MovieInfoDescription>
          <MovieInfoGenre>장르 : {genre}</MovieInfoGenre>
          <MovieInfoLocation>위치: {location}</MovieInfoLocation>
          {/* <MovieInfoSummary>줄거리: {summary}</MovieInfoSummary> */}
          <MovieDate>상영일: {date}</MovieDate>
          <MovieInfoPrice>
            <MoviePrice> 판매가격: {price}₩</MoviePrice>
          </MovieInfoPrice>
        </MovieInfoText>
      </MovieInfoWrap>
    </Detail>
  );
};

const Detail = styled.div``;

const MovieInfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const MovieInfoImg = styled.div`
  width: 330px;
  height: 410px;
`;
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;
const MovieInfoText = styled.div`
  margin-top: 20px;
  padding: 30px;
`;
const MovieInfoName = styled.div`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 30px;
  color: #8b8b8b;
`;
const MovieInfoDescription = styled.div`
  margin-bottom: 10px;
  font-weight: bolder;
  font-size: 22px;
  color: rgb(255, 186, 0);
`;

const MovieInfoLocation = styled.div`
  margin-bottom: 50px;
  font-weight: bolder;
  color: #898989;
`;

const MovieInfoPrice = styled(MovieInfoLocation)`
  font-weight: bolder;
  color: #757575;
`;
const MoviePrice = styled.div`
  margin-top: 100px;
  font-size: 25px;
`;
const MovieInfoGenre = styled(MovieInfoLocation)`
  margin-top: 30px;
`;

const MovieDate = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #898989;
`;

export default InfoSide;
