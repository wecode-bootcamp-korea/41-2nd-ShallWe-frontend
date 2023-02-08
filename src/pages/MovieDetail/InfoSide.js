import React from 'react';
import styled from 'styled-components';
import MyShallwe from '../MyPage/components/MyShallwe';

const InfoSide = ({ movieData }) => {
  const { title, price, hashtag, thumbnail_url, movie_genre, date, running_time } = movieData;

  return (
    <Detail>
      <MovieInfoWrap>
        <MovieInfoImg>
          <MovieImg src={thumbnail_url} alt={thumbnail_url} />
        </MovieInfoImg>
        <MovieInfoText>
          <MovieInfoName>{title}</MovieInfoName>
          <MovieInfoGenre>장르 : {movie_genre}</MovieInfoGenre>
          <MovieInfoLocation>위치: Shallwe위워크 선릉점</MovieInfoLocation>
          <MovieRunningTime>러닝타임: {running_time}</MovieRunningTime>
          <MovieDate>상영일: {date}</MovieDate>
          <MovieInfoDescription>{hashtag}</MovieInfoDescription>
          <MovieInfoPrice>
            <MoviePrice>판매가격: {Math.floor(price)}₩</MoviePrice>
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
  object-fit: contain;
`;
const MovieImg = styled.img`
  width: 300px;
  height: 400px;
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
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bolder;
  font-size: 17px;
  line-height: 20px;
  word-break: keep-all;
  overflow-wrap: break-word;
  color: #f6c72e;
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
  margin-top: 25px;
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
