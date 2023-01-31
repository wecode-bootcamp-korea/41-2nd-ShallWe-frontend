import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
<<<<<<< HEAD
import KakaoLogin from './pages/Login/KakaoLogin';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

=======
import MovieCart from './pages/MovieCart/MovieCart';
>>>>>>> e17015d (Add MovieCart layout)
export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/moviecart" element={<MovieCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
