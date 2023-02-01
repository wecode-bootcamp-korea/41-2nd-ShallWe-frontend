import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MyBox from './MyBox';
import ReviewComment from './Review/ReviewComment';
import Button from '../../../components/Button';
import { API } from '../../../config';

import { REVIEW_DATA_BACK } from './Review/ReviewData';

const Review = () => {
  // const [movie, setMovie] = useState([]);

  const [movie, setMovie] = useState(REVIEW_DATA_BACK[0].orders);

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
        setMovie(data.orders);
      });
  }, []);

  return (
    <>
      <MyBox>
        {movie.map((movie) => {
          return <ReviewComment key={movie.order_id} movie={movie} />;
        })}
      </MyBox>
    </>
  );
};

export default Review;

const ShowReview = styled.div`
  display: flex;
  margin: auto;
  min-width: 1144px;
  width: 1144px;
  margin: auto;

  ${Button} {
    margin-right: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${Button} {
    margin-right: 10px;
  }
`;
