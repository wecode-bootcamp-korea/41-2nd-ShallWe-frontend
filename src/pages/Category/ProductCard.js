import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

const ProductCards = ({ result }) => {
  return (
    <>
      <Product key={result.id}>
        <ProductLink to={`/detail/${result.id}`}>
          <ProductImg>
            <img src={result.thumbnail_url} alt="대표사진" />
          </ProductImg>
          <ProductDescription>
            <ProductTitle> {result.title} </ProductTitle>
            <ProductPriceRate />
            <ProductPriceWrapper>
              <ProductPrice> {parseInt(result.price)}</ProductPrice>원
            </ProductPriceWrapper>
            <ProductHeshTag>
              <div> {result.movieGenre[0].movieGenreName} </div>
              <p />
              <ProductPlaceTime>
                <div>{result.meetingData[0].meetingPlaceAddress}</div>
                <div>{result.meeting_date.slice(0, 10)}</div>
              </ProductPlaceTime>
            </ProductHeshTag>
          </ProductDescription>
        </ProductLink>
      </Product>
    </>
  );
};

export default ProductCards;

const Product = styled.div`
  width: 274px;

  margin: 16px auto;
  &:nth-child(4n + 4) {
    margin-right: 0;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  cursor: pointer;
  text-decoration: none;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
const ProductLink = styled(Link)`
  text-decoration: none;
`;

const ProductImg = styled.div`
  height: 330px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ccc;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductDescription = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const ProductTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  height: 25px;
  text-align: left;
  overflow: hidden;
  line-height: 18px;
`;
const ProductPriceRate = styled.div``;

const ProductPriceWrapper = styled.div`
  height: 26px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 20px;
`;

const ProductHeshTag = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
  line-height: 25px;
  font-size: 15px;
  color: ${theme.fontColor};
  div {
    font-size: 12px;
  }
  p {
    margin: 0 5px;
    border-top: 1px solid #ccc;
    margin-bottom: 2px;
  }
`;

const ProductPlaceTime = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 12px;
  }
`;
