import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavigateMain>
      <NavMain>
        <NavMainMenu>
          <Link to="/">
            <NavMainMenuImage src="../images/logo.png" alt="로고 이미지" />
          </Link>
          <NavMainMenuList>
            <StyledLink to="/subscribeinfo">
              <NavMainMenuListItem>구독서비스</NavMainMenuListItem>
            </StyledLink>
            <StyledLink to="/productlist">
              <NavMainMenuListItem>쉘위마켓</NavMainMenuListItem>
            </StyledLink>
            <Link to="/Search">
              <NavMainMenuSearch type="text" placeholder="🔍 무엇을 찾고 계신가요?" />
            </Link>
          </NavMainMenuList>
        </NavMainMenu>
        <NavSideMenuList>
          <StyledLink to="/signin">
            <NavSideMenuListItem>로그인</NavSideMenuListItem>
          </StyledLink>
        </NavSideMenuList>
      </NavMain>
    </NavigateMain>
  );
};

const NavigateMain = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center', 'center')}

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
  width: 120px;
  height: 40px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Nav;
