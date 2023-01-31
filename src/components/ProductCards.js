import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { AiOutlineStar } from 'react-icons/ai';

const ProductCards = ({ product }) => {
  return (
    <>
      {product.map((result, key) => {
        return (
          <Product key={key}>
            <ProductImg>
              <img src={result.thumbnail} alt="대표사진" />
            </ProductImg>
            <ProductDescription>
              <ProductTitle> {result.title} </ProductTitle>
              <ProductPriceRate />
              <ProductPriceWrapper>
                <ProductPrice> {result.price}</ProductPrice>원
              </ProductPriceWrapper>
              <ProductHeshTag>
                {result.hashTag.map((tag, i) => {
                  return <span key={i}> #{tag.Tag_1 || tag.Tag_2} </span>;
                })}
              </ProductHeshTag>
            </ProductDescription>
          </Product>
        );
      })}
    </>
  );
};

export default ProductCards;

const Product = styled.div`
  width: 274px;
  height: 500px; //임시 높이
  margin: 16px auto;
  &:nth-child(4n + 4) {
    margin-right: 0;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
`;

const ProductImg = styled.div`
  height: 330px;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductDescription = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  height: 35px;
  text-align: left;
  overflow: hidden;
  line-height: 18px;
`;
const ProductPriceRate = styled.div`
  margin-top: 5px;
`;

const ProductPriceWrapper = styled.div`
  height: 26px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 20px;
  margin-right: 3px;
`;

const ProductHeshTag = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
  line-height: 25px;
  font-size: 15px;
  color: ${theme.fontColor};
`;
