import React from 'react';
import { Outlet } from 'react-router-dom';
import MyShallwe from './components/MyShallwe';

const MyPage = () => {
  return (
    <>
      <MyShallwe />
      <Outlet />
    </>
  );
};

export default MyPage;
