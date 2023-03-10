import React from 'react';
import styled from 'styled-components';
import KakaoPay from '../../components/KakaoPay/KakaoPay';

const MovieReceipt = (props) => {
  const { totalSumPrice, pickMovieList } = props;

  return (
    <MovieReceiptWrap>
      <MovieReceiptBox>
        <MovieReceiptTitle>계산서</MovieReceiptTitle>
        <ReceiptPriceWrap>
          <ReceiptTitles>총 상품금액</ReceiptTitles>
          <ReceiptPrice>{totalSumPrice.toLocaleString()}원</ReceiptPrice>
        </ReceiptPriceWrap>
        <KakaoPay pickMovieList={pickMovieList} totalSumPrice={totalSumPrice} />
      </MovieReceiptBox>
    </MovieReceiptWrap>
  );
};

const MovieReceiptWrap = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;
  max-height: 100vh;
  padding: 0px 10px;
`;
const MovieReceiptBox = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 40px 20px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  color: rgb(112, 112, 112);
`;

const MovieReceiptTitle = styled.div`
  color: #4c4c4c;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  font-size: 18px;
`;

const ReceiptPriceWrap = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  padding: 20px 0px;
`;

const ReceiptTitles = styled.div``;
const ReceiptPrice = styled.div`
  color: #0097f3;
`;

export default MovieReceipt;
