import React from 'react';
import styled from 'styled-components';

const MovieItem = (props) => {
  const { deleteItem, itemPlusCount, itemMinusCount, orderMovieList, setOrderMovieList, ...movie } =
    props;
  const { id, counts, price, meeting_date, time, name, thumbnail_url } = movie;

  return (
    <MovieItemWrap>
      <MovieItemCheckWrap>
        <MovieItemCheck type="checkbox" defaultChecked />
      </MovieItemCheckWrap>
      <MovieItemBox>
        <MovieItemInfo>
          <MovieItemImage>
            <ItemImg src={thumbnail_url} alt={name} />
          </MovieItemImage>
          <MovieItemDelete>
            <MovieItemName>{name}</MovieItemName>
            <DeleteButton onClick={(e) => deleteItem(id)}>X</DeleteButton>
          </MovieItemDelete>
          <ItemCapacityBox>
            <MovieItemCapacity>
              [{meeting_date} | {time}] {name}
            </MovieItemCapacity>
          </ItemCapacityBox>
        </MovieItemInfo>

        <QuantityWrap>
          <MovieItemQuantity>
            <ItemMinusCount onClick={() => itemMinusCount(id)}>-</ItemMinusCount>
            <Count>{counts}</Count>
            <ItemPlusCount onClick={() => itemPlusCount(id)}>+</ItemPlusCount>
          </MovieItemQuantity>
          <EachMovieItemPrice>
            <EachTotalPrice>{(price * counts).toLocaleString()}원</EachTotalPrice>
          </EachMovieItemPrice>
        </QuantityWrap>
      </MovieItemBox>
    </MovieItemWrap>
  );
};

const MovieItemWrap = styled.div`
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  margin-top: 15px;
`;
const MovieItemCheckWrap = styled.div``;

const MovieItemCheck = styled.input`
  margin-top: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const MovieItemBox = styled.div`
  width: 100%;
  display: grid;
`;

const MovieItemInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const MovieItemImage = styled.div`
  grid-row: span 2 / auto;
  width: 80px;
  height: 99px;
  margin: 10px;
  border-radius: 17px;
  overflow: hidden;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieItemDelete = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  margin-top: 20px;
  grid-column: 2 / 2;
  font-size: 18px;
  font-weight: bolder;
`;

const MovieItemName = styled.p``;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ItemCapacityBox = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  height: 25px;
  grid-column: 2 / 2;
  margin-top: 30px;
  padding: 14px 0px 0px 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const MovieItemCapacity = styled.p`
  height: 27px;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  color: #828282;
`;

const QuantityWrap = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 100%;
`;
const MovieItemQuantity = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 110px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid rgb(224, 224, 224);
  font-size: 13px;
`;
const ItemMinusCount = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 30px;
  height: 100%;
  border-right: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  font-size: 30px;
  color: #8f8f8f;
`;
const ItemPlusCount = styled(ItemMinusCount)`
  border-left: 1px solid rgb(224, 224, 224);
  cursor: pointer;
`;
const Count = styled.p``;

const EachMovieItemPrice = styled.div``;
const EachTotalPrice = styled.p`
  color: #0097f3;
`;

export default MovieItem;
