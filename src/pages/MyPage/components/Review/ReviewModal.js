import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Textarea from '../../../../components/Textarea';
import { API } from '../../../../config';
import { v4 as uuidv4 } from 'uuid';

const ReviewModal = ({ movies, handleShowModal, handleAdd }) => {
  const reviewRef = useRef();
  const [review, setReview] = useState('');

  const handleChangeReview = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    if (review.length < 15) {
      reviewRef.current.focus();
      return;
    } else {
      const id = uuidv4();
      handleAdd({
        review_id: id,
        review,
      });
      setReview('');
      handleShowModal();
      handleSendCreatedReview(id);
    }
  };

  //Review Create
  const handleSendCreatedReview = (id) => {
    fetch(`${API.MYREVIEW}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        movieId: movies.movie_id,
        content: review,
        imagesUrl: [],
        reviewKey: id,
      }),
    });
  };

  return (
    <UpgradeCard width="800px" height="400px">
      <UpgradeTextarea
        type="text"
        width="690px"
        height="200px"
        margin="0"
        color="black"
        placeholder="이번 영화는 어땠나요? 15글자 이상 리뷰를 남겨주세요~!"
        value={review}
        onChange={handleChangeReview}
        ref={reviewRef}
      />
      <ButtonWrapper>
        <Button
          onClick={() => {
            handleSubmit();
          }}>
          리뷰 남기기
        </Button>
        <Button onClick={handleShowModal}>리뷰 취소</Button>
      </ButtonWrapper>
    </UpgradeCard>
  );
};

export default ReviewModal;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UpgradeTextarea = styled(Textarea)`
  background-color: #ececec;
`;

const UpgradeCard = styled(Card)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 150px;
  left: 550px;
  box-shadow: 8px 5px 12px 1px rgba(0, 0, 0, 0.52);

  padding: 30px;

  ${Button} {
    margin-top: 50px;
  }
`;
