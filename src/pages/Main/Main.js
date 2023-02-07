import React from 'react';
import Slide from './Component/Slide';
import MiniSlider from './Component/MiniSlider';
import LimitBox from './Component/LimitBox';
import CategoryBar from './Component/CategoryBar';

const Main = () => {
  return (
    <div>
      <Slide />
      <CategoryBar />
      <MiniSlider />
      <LimitBox />
    </div>
  );
};

export default Main;
