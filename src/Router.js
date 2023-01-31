import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Category from './pages/Category/Category';
import KakaoLogin from './pages/Login/KakaoLogin';
import Subscription from './pages/Subscription/Subscription';
import MovieCart from './pages/MovieCart/MovieCart';
import Search from './pages/Search/Search';
import MyPage from './pages/MyPage/MyPage';
import UserInfo from './pages/MyPage/components/UserInfo';
import Review from './pages/MyPage/components/Review';
import Refunds from './pages/MyPage/components/Refunds';
import Detail from './pages/MovieDetail/Detail';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/moviecart" element={<MovieCart />} />
        <Route path="/mypage" element={<MyPage />}>
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="reviews" element={<Review />} />
          <Route path="refunds" element={<Refunds />} />
        </Route>
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
