import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfoSide from './InfoSide';
import DetailOption from './DetailOption';
// import { useParams } from 'react-router-dom';

const Detail = () => {
  const [movieData, setMovieData] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    fetch(`/data/list.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setMovieData(data[0]));
  }, []);

  return (
    <DetailWrap>
      <MovieDetailWrap>
        <InfoSide movieData={movieData} />
        <DetailOption movieData={movieData} />
      </MovieDetailWrap>
    </DetailWrap>
  );
};
const DetailWrap = styled.div`
  display: flex;
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
