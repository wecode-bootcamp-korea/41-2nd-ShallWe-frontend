import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MyBox from './MyBox';
import ReviewComment from './Review/ReviewComment';
import Button from '../../../components/Button';
import { API } from '../../../config';

const Review = () => {
  const [movie, setMovie] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`${API.MYREVIEW}`, {
      method: 'GET',
      headers: {
        Authorization: window.localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovie(data.orders);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.MYINFO}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.data[0]);
      });
  }, []);

  console.log(userInfo);
  return (
    <>
      <MyBox>
        {movie.map((movie) => {
          return <ReviewComment key={movie.order_id} movie={movie} nickname={userInfo.nickname} />;
        })}
      </MyBox>
    </>
  );
};

export default Review;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${Button} {
    margin-right: 10px;
  }
`;
