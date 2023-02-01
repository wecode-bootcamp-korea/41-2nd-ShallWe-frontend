import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavigateMain>
      <NavMain>
        <NavMainMenu>
          <Link to="/">
            <NavMainMenuImage
              src="../images/Screenshot_20221227_112939_Samsung Notes.jpg"
              alt="로고 이미지"
            />
          </Link>
          <NavMainMenuList>
<<<<<<< HEAD
            <StyledLink to="/subscription">
              <NavMainMenuListItem>구독서비스</NavMainMenuListItem>
            </StyledLink>
            <StyledLink to="/category">
=======
            <StyledLink to="/subscribeinfo">
              <NavMainMenuListItem>구독서비스</NavMainMenuListItem>
            </StyledLink>
            <StyledLink to="/productlist">
>>>>>>> 3fdd54b (Add nav)
              <NavMainMenuListItem>쉘위마켓</NavMainMenuListItem>
            </StyledLink>
            <Link to="/Search">
              <NavMainMenuSearch type="text" placeholder="🔍 무엇을 찾고 계신가요?" />
            </Link>
          </NavMainMenuList>
        </NavMainMenu>
        <NavSideMenuList>
<<<<<<< HEAD
          <StyledLink to="/login">
            <NavSideMenuListItem>로그인</NavSideMenuListItem>
          </StyledLink>
          <Link to="/mypage">
            <NavSideMenuListImage
              src={require('../../pages/MyPage/images/user.png')}
              alt="마이페이지"
=======
          <StyledLink to="/signin">
            <NavSideMenuListItem>로그인</NavSideMenuListItem>
          </StyledLink>
          <Link to="/moviecart">
            <NavSideMenuListImage
              src="https://cdn-icons-png.flaticon.com/512/7695/7695110.png"
              alt="장바구니 이미지"
>>>>>>> 3fdd54b (Add nav)
            />
          </Link>
        </NavSideMenuList>
      </NavMain>
    </NavigateMain>
  );
};

const NavigateMain = styled.div`
  position: sticky;
  border: none;
  border-bottom: 0.5px solid rgb(224, 224, 224);
  padding: 18px 69px;
  z-index: 999;
  top: 0;
  width: 100%;
  background-color: white;
`;

const NavMain = styled.div`
  width: 1240px;
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')}
`;

const NavMainMenu = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'null', 'center')}
`;

const NavMainMenuImage = styled.img`
  width: 60px;
  height: 23px;
  margin-right: 30px;
  cursor: pointer;
`;

const NavMainMenuList = styled.ul`
  ${({ theme }) => theme.mixin.flex(null, 'space-around', 'center')}
`;

const NavMainMenuListItem = styled.li`
  margin-right: 20px;
  font-weight: bold;
  color: #707070;
  cursor: pointer;
`;

const NavMainMenuSearch = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  background-color: #f2f2f2;
  color: #ebebeb;
  cursor: pointer;
  outline: none;
`;

const NavSideMenuList = styled.ul`
  ${({ theme }) => theme.mixin.flex(null, null, 'center')};
  color: #323232;
  font-size: 14px;
`;

const NavSideMenuListItem = styled.li`
  cursor: pointer;
  margin-right: 20px;
`;

const NavSideMenuListImage = styled.img`
  width: 35px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Nav;
