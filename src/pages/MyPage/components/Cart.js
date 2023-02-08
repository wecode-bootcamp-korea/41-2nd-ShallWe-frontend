import React from 'react';
import MyBox from './MyBox';
import MovieCart from '../../MovieCart/MovieCart';

const Cart = () => {
  return (
    <div>
      <MyBox>
        <MovieCart />
      </MyBox>
    </div>
  );
};

export default Cart;
