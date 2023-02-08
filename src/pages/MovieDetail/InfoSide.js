import React from 'react';
import styled from 'styled-components';

const InfoSide = ({ movieData }) => {
  const { title, price, plot, thumbnail_url, movie_genre, date, running_time } = movieData;

  return (
    <Detail>
      <MovieInfoWrap>
        <MovieInfoImg>
          <MovieImg src={thumbnail_url} alt={thumbnail_url} />
        </MovieInfoImg>
        <MovieInfoText>
          <MovieInfoName>{title}</MovieInfoName>
          <MovieInfoDescription>{plot}</MovieInfoDescription>
          <MovieInfoGenre>장르 : {movie_genre}</MovieInfoGenre>
          <MovieInfoLocation>위치: {'11'}</MovieInfoLocation>
          <MovieRunningTime>러닝타임: {running_time}</MovieRunningTime>
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
const MovieRunningTime = styled.div`
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
