import React, { useState, useEffect } from 'react';
import { API } from '../../../config';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const INFO_LISTS = [
  {
    text: '구독내역',
    src: 'bill',
    alt: 'bill-icon',
    navigate: '/mypage/subscribe',
  },
  {
    text: '영화/리뷰',
    src: 'movie',
    alt: 'movie-icon',
    navigate: '/mypage/reviews',
  },
  {
    text: '회원정보',
    src: 'user',
    alt: 'user-icon',
    navigate: '/mypage/userinfo',
  },
  {
    text: '장바구니',
    src: 'ticket',
    alt: 'ticket-icon',
    navigate: '/mypage/moviecart',
  },
  {
    text: '취소환불',
    src: 'payback',
    alt: 'payback-icon',
    navigate: '/mypage/refunds',
  },
  {
    text: '고객센터',
    src: 'call',
    alt: 'call-icon',
    navigate: '/mypage/call',
  },
];

const MyShallwe = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`${API.MYINFO}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.data[0]);
      });
  }, []);

  return (
    <Container>
      <QueryWrapper>
        <MemberInfoBox>
          <MeberInfo>
            <div className="name">{userInfo.nickname}</div>
            <div>님</div>
          </MeberInfo>
          <MeberInfo>
            <div>등급</div>
            <div className="grade">새싹</div>
          </MeberInfo>
        </MemberInfoBox>
        <SidebarInfoBox>
          {INFO_LISTS.map((list, idx) => {
            return (
              <InfoItem key={idx}>
                <Link className="navigate" to={`${list.navigate}`}>
                  <InfoText> {list.text} </InfoText>
                  <InfoIcon src={require('../images/' + list.src + '.png')} alt={list.alt} />
                </Link>
              </InfoItem>
            );
          })}
        </SidebarInfoBox>
      </QueryWrapper>
    </Container>
  );
};

export default MyShallwe;
const InfoIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .navigate {
    text-decoration: none;
  }

  ${InfoIcon} {
    margin-left: 10px;
  }
`;

const InfoText = styled.div`
  width: 50px;
  font-size: 13px;
  text-align: center;
  color: #707070;

  margin-bottom: 5px;
  cursor: pointer;

  &:active,
  &:hover {
    color: #ffba00;
  }
`;

const MeberInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 65px;

  font-size: 16px;
  color: #707070;

  .name {
    font-weight: bold;
  }

  .grade {
    font-size: 14px;
    color: #0097f3;
  }
`;

const MemberInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 364px;
  height: 62px;

  padding: 6px 31px 0 0;
  border-right: 1px solid #b2b2b2;
`;

const SidebarInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 756px;
  height: 62px;

  font-size: 16px;
  color: #707070;
`;

const QueryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 1144px;
  width: 1144px;
  height: 110px;
  padding: 23px 0 23px 22px;

  border-radius: 10px;
  border: 1px solid #e0e0e0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 30px 10px 130px 10px;
`;
