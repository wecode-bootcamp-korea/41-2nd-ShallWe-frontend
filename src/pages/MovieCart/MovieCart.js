import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import MovieReceipt from './MovieReceipt';

const MovieCart = () => {
  const [movieList, setMovieList] = useState([]);
  const accessToken = localStorage.getItem('token') ?? '';

  const totalSumPrice = movieList.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0
  );

  const itemPlusCount = (id) => {
    const next = movieList.map((movieItem) => {
      if (movieItem.id === id) {
        return { ...movieItem, quantity: movieItem.quantity + 1 };
      }
      return movieItem;
    });
    setMovieList(next);
  };

  const itemMinusCount = (id) => {
    const next = movieList.map((movieItem) => {
      if (movieItem.id === id) {
        if (movieItem.quantity === 1) {
          return { ...movieItem, quantity: 1 };
        } else {
          return { ...movieItem, quantity: movieItem.quantity - 1 };
        }
      }
      return movieItem;
    });
    setMovieList(next);
  };

  const getMovieData = () => {
    fetch(`/data/movie.json`, {
      method: 'GET',
      headers: { authorization: accessToken },
    })
      .then((response) => response.json())
      .then((res) => setMovieList(res));
  };
  useEffect(() => {
    getMovieData();
  }, []);

  const deleteItem = (id) => {
    fetch(`/movies/${id}`, {
      method: 'DELETE',
      headers: {
        // authorization: accessToken,
      },
    }).then((res) => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다');
        setMovieList(movieList.filter((movieList) => id !== movieList.movieId));
      } else {
        alert('다시 시도해주세요');
      }
    });
  };

  return (
    <MoviePageWrap>
      <MovieWrap>
        <MovieTopSide>
          <MovieBar>
            <CheckAll>
              <CheckAllButton type="checkbox" defaultChecked />
              <CheckText>
                모두 선택 ({movieList.length}/{movieList.length})
              </CheckText>
            </CheckAll>
            <CheckOne>
              <CheckOneButton>선택삭제</CheckOneButton>
            </CheckOne>
          </MovieBar>
          <div />
        </MovieTopSide>

        <MovieLeftSide>
          <ListHeader>영화관</ListHeader>
          <MovieItemList>
            {movieList.map((movie) => (
              <MovieItem
                itemPlusCount={itemPlusCount}
                itemMinusCount={itemMinusCount}
                key={movie.id}
                {...movie}
                deleteItem={deleteItem}
              />
            ))}
          </MovieItemList>
        </MovieLeftSide>
        <MovieRightSide>
          <MovieReceipt key={movieList.id} price={movieList.price} totalSumPrice={totalSumPrice} />
        </MovieRightSide>
      </MovieWrap>
    </MoviePageWrap>
  );
};

const MoviePageWrap = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const MovieWrap = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1024px;
  height: 100%;
  padding: 20px;
  margin: 30px;
`;

const MovieTopSide = styled.div`
  grid-column: 1 / 3;
`;

const MovieLeftSide = styled.div`
  background-color: rgb(255, 255, 255);
  width: 590px;
  min-height: 100%;
  padding: 30px 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
`;

const ListHeader = styled.div`
  font-size: 18px;
  font-weight: bolder;
  padding: 0px 0px 20px 10px;
  border-bottom: 1px solid grey;
`;

const MovieItemList = styled.ul``;

const MovieRightSide = styled.div``;

const MovieBar = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 590px;
  padding: 10px;
`;

const CheckAll = styled.div`
  display: flex;
  align-items: center;
`;

const CheckAllButton = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const CheckText = styled.span`
  margin-left: 10px;
  color: #6f6f6f;
`;

const CheckOne = styled.div``;

const CheckOneButton = styled.button`
  appearance: none;
  border: 0px;
  background-color: transparent;
  color: rgb(0, 151, 243);
  font-size: 14px;
  cursor: pointer;
`;

export default MovieCart;
