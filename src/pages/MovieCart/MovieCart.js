import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../config';
import MovieItem from './MovieItem';
import MovieReceipt from './MovieReceipt';

const MovieCart = () => {
  const [pickMovieList, setPickMovieList] = useState([]);
  const [orderMovieList, setOrderMovieList] = useState([]);

  const accessToken = localStorage.getItem('token') ?? '';
  const totalSumPrice = pickMovieList.reduce(
    (sum, current) => sum + current.price * current.counts,
    0
  );

  const itemPlusCount = (id) => {
    const next = pickMovieList.map((movieItem) => {
      if (movieItem.id === id) {
        return { ...movieItem, counts: movieItem.counts + 1 };
      }
      return movieItem;
    });
    setPickMovieList(next);
  };

  const itemMinusCount = (id) => {
    const next = pickMovieList.map((movieItem) => {
      if (movieItem.id === id) {
        if (movieItem.counts === 1) {
          return { ...movieItem, counts: 1 };
        } else {
          return { ...movieItem, counts: movieItem.counts - 1 };
        }
      }
      return movieItem;
    });
    setPickMovieList(next);
  };

  const getPickMovieData = () => {
    fetch(`${API.MOVIECART}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((res) => setPickMovieList(res.data));
  };
  useEffect(() => {
    getPickMovieData();
  }, []);

  const deleteItem = (id) => {
    setPickMovieList(pickMovieList.filter((item) => item.id === id));
    fetch(`${API.MOVIECART}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: accessToken,
      },
    }).then((res) => res.json);
  };

  return (
    <MoviePageWrap>
      <MovieWrap>
        <MovieLeftSide>
          <ListHeader>영화관</ListHeader>
          <MovieItemList>
            {pickMovieList?.length > 0 &&
              pickMovieList?.map((movie) => (
                <MovieItem
                  itemPlusCount={itemPlusCount}
                  itemMinusCount={itemMinusCount}
                  key={movie.id}
                  {...movie}
                  deleteItem={deleteItem}
                  orderMovieList={orderMovieList}
                  pickMovieList={pickMovieList}
                  setOrderMovieList={setOrderMovieList}
                />
              ))}
          </MovieItemList>
        </MovieLeftSide>
        <MovieRightSide>
          <MovieReceipt
            key={orderMovieList.id}
            orderMovieList={orderMovieList}
            totalSumPrice={totalSumPrice}
            pickMovieList={pickMovieList}
          />
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

export default MovieCart;
