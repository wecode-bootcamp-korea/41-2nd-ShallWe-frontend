import React, { useState, useEffect } from 'react';
import { API } from '../../../config';
import styled from 'styled-components';
import MyBox from './MyBox';

const UserInfo = () => {
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
    <MyBox>
      <MyBoxContent>
        <ContentHeader>
          <div className="header-content">회원정보</div>
        </ContentHeader>
        <ContentDetail>
          <DetailItem>
            <div>닉네임</div>
            <div>{userInfo.nickname}</div>
          </DetailItem>
          <DetailItem>
            <div>비밀번호</div>
            <div>********</div>
          </DetailItem>
          <DetailItem>
            <div>이메일</div>
            <div>{userInfo.email}</div>
          </DetailItem>
          <DetailItem>
            <div>이메일 수신 이메일</div>
            <div>동의안함</div>
          </DetailItem>
          <DetailItem>
            <div>이메일 수신 SMS</div>
            <div>동의안함</div>
          </DetailItem>
        </ContentDetail>
      </MyBoxContent>
    </MyBox>
  );
};

export default UserInfo;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ContentDetail = styled.div`
  font-size: 13px;
  color: #707070;
  padding-top: 30px;
`;

const ContentHeader = styled.div`
  padding-bottom: 15px;
  border-bottom: 0.5px solid rgb(255, 222, 168);
  .header-content {
    font-size: 15px;
    font-weight: bold;
    color: #707070;
  }
`;

const MyBoxContent = styled.div`
  width: 100%;
`;
