import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Category from './pages/Category/Category';
import KakaoLogin from './pages/Login/KakaoLogin';
import MyShallwe from './pages/MyPage/MyShallwe';
import Subscription from './pages/Subscription/Subscription';
import MovieCart from './pages/MovieCart/MovieCart';
import Search from './pages/Search/Search';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/moviecart" element={<MovieCart />} />
        <Route path="/mypage" element={<MyShallwe />} />
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
