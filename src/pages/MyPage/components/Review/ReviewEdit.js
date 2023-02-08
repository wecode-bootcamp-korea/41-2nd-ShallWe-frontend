import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from '../../../../components/Button';
import Textarea from '../../../../components/Textarea';
import { API } from '../../../../config';

const ReviewEdit = ({ review, handleDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newReview, setNewReview] = useState(review.review);

  const handleShowEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleQuitEdit = () => {
    handleShowEdit();
    setNewReview(review.review);
  };

  const handleEdit = () => {
    onEdit(review.review_id, newReview);
  };

  const handleSendDeletedReview = () => {
    fetch(`${API.MYREVIEW}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        reviewKey: review.review_id,
      }),
    });
  };

  const handleSendUpdatedReview = () => {
    fetch(`${API.MYREVIEW}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        content: newReview,
        imagesUrl: [],
        reviewKey: review.review_id,
      }),
    });
  };

  console.log(review);

  return (
    <>
      {review.review === null ? (
        ''
      ) : (
        <ReviewContentWrapper key={review.review_id}>
          {isEdit ? (
            <Textarea
              width="700px"
              type="text"
              value={newReview}
              onChange={(e) => {
                setNewReview(e.target.value);
              }}
            />
          ) : (
            <p>{review.review}</p>
          )}
          {isEdit ? (
            <ButtonBox>
              <Button
                width="70px"
                height="50px"
                fontSize="10px"
                padding="10px"
                onClick={() => {
                  handleEdit();
                  handleSendUpdatedReview();
                  handleQuitEdit();
                }}>
                수정완료
              </Button>
              <Button
                width="70px"
                height="50px"
                fontSize="10px"
                padding="10px"
                onClick={() => {
                  handleShowEdit();
                  handleQuitEdit();
                }}>
                수정취소
              </Button>
            </ButtonBox>
          ) : (
            <ButtonBox>
              <Button
                width="70px"
                height="50px"
                fontSize="10px"
                padding="10px"
                onClick={() => {
                  handleShowEdit();
                }}>
                수정하기
              </Button>
              <Button
                width="70px"
                height="50px"
                fontSize="10px"
                padding="10px"
                onClick={() => {
                  handleDelete(review.review_id);
                  handleSendDeletedReview();
                }}>
                삭제하기
              </Button>
            </ButtonBox>
          )}
        </ReviewContentWrapper>
      )}
    </>
  );
};

export default ReviewEdit;

const ButtonBox = styled.div`
  display: flex;

  ${Button} {
    margin-left: 10px;
  }
`;

const ReviewContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  color: #707070;

  p {
    font-size: 14px;
    line-height: 22px;
    width: 335px;
    height: 50px;
  }
`;
