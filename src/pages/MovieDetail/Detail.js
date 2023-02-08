import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfoSide from './InfoSide';
import DetailOption from './DetailOption';
import Kakaomap from './KakaoMap';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    console.log(id);
    fetch(`${BASE_URL}/shallWeMovie/detail/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setMovieData(data.data[0]));
  }, []);

  return (
    <DetailAll>
      <DetailWrap>
        <MovieDetailWrap>
          <InfoSide movieData={movieData} />
          <DetailOption movieData={movieData} />
        </MovieDetailWrap>
        <Kakaomap />
      </DetailWrap>
    </DetailAll>
  );
};
const DetailAll = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 30px;
`;

const MovieDetailWrap = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 20px;
  width: 1160px;
  height: 100%;
`;

export default Detail;
