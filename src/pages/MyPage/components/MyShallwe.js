import React from 'react';
import styled from 'styled-components';

const INFO_LISTS = [
  {
    text: '구독내역',
    src: 'bill',
    alt: 'bill-icon',
  },
  {
    text: '취소환불',
    src: 'payback',
    alt: 'payback-icon',
  },
  {
    text: '영화정보',
    src: 'movie',
    alt: 'movie-icon',
  },
  {
    text: '회원정보',
    src: 'user',
    alt: 'user-icon',
  },
  {
    text: '리뷰',
    src: 'review',
    alt: 'review-icon',
  },
  {
    text: '고객센터',
    src: 'call',
    alt: 'call-icon',
  },
];

const MyShallwe = () => {
  return (
    <Container>
      <QueryWrapper>
        <MemberInfoBox>
          <MeberInfo>
            <div className="name">제이크</div>
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
                <InfoText> {list.text} </InfoText>
                <InfoIcon src={require('../images/' + list.src + '.png')} alt={list.alt} />
              </InfoItem>
            );
          })}
        </SidebarInfoBox>
      </QueryWrapper>
    </Container>
  );
};

export default MyShallwe;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const InfoIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
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
