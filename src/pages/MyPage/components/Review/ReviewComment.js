import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';

import ReviewModal from './ReviewModal';
import ReviewEdit from './ReviewEdit';

import { ButtonWrapper } from '../Review';

const ReviewComment = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);
  const [sortedMovies, setSortedMovies] = useState(movie.movies);
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow(!isShow);
  };

  const handleAdd = (Added) => {
    setReviews([...reviews, Added]);
  };

  const handleDelete = (deleted) => {
    setReviews(reviews.filter((item) => item.review_id !== deleted));
  };

  const handleEdit = (targetId, newReview) => {
    setReviews(
      reviews.map((item) => {
        return item.review_id === targetId ? { ...item, review: newReview } : item;
      })
    );
  };

  return (
    <>
      <ReviewItem>
        <ReviewTitle>
          <div className="nickname">Nickname</div>
          <div className="movie-title mr-10">{movie.movies.movie_title}</div>
          <div className="date">{movie.created_at}</div>
        </ReviewTitle>
        <ReviewContent>
          <ReviewContentWrapper>
            <div>{movie.movies.plot}</div>
            <img src={movie.movies.thumbnail_url} alt="사진" />
            <Button
              width="80px"
              height="50px"
              bgColor="white"
              color="#0097F3"
              fontSize="7px"
              margin="0"
              border="none"
              onClick={() => {
                handleShowModal();
              }}>
              리뷰하기
            </Button>
          </ReviewContentWrapper>
          <ReviewContent>
            {reviews.map((review) => {
              return (
                <ReviewEdit
                  key={review.review_id}
                  review={review}
                  setReviews={setReviews}
                  handleDelete={handleDelete}
                  onEdit={handleEdit}
                />
              );
            })}
          </ReviewContent>
          <ButtonWrapper>
            {isShow && (
              <ReviewModal
                movies={sortedMovies}
                handleShowModal={handleShowModal}
                handleAdd={handleAdd}
              />
            )}
          </ButtonWrapper>
        </ReviewContent>
      </ReviewItem>
    </>
  );
};

export default ReviewComment;

const ReviewContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  color: #707070;

  margin-bottom: 50px;
`;

const ReviewContent = styled.div`
  padding: 20px 25px;
`;

const ReviewTitle = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 30px;
  border-radius: 10px;
  background-color: #f4f4f4;

  font-size: 13px;
  line-height: 1.5715;

  font-weight: bold;
`;

const ReviewItem = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
