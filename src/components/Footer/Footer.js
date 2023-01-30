import React from 'react';
import styled from 'styled-components';

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <TopText>
            <p className="medium-text">쉘위컴퍼니 주식회사</p>
            <p className="small-text">고객센터: 070-5014-1282</p>
            <p className="small-text">평일 10:00 - 22:00, 주말 휴무</p>
          </TopText>
          <TopImgBox>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <AiFillInstagram className="icon insta" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <AiFillYoutube className="icon youtube" />
            </a>
            <a href="https://www.kakaocorp.com/page/" target="_blank" rel="noreferrer">
              <RiKakaoTalkFill className="icon kakao" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="icon facebook" />
            </a>
            <a href="https://www.naver.com" target="_blank" rel="noreferrer">
              <SiNaver className="icon naver" />
            </a>
          </TopImgBox>
        </FooterTop>

        <FooterCenter>
          <CenterItem>
            <span>이용약관</span>
            <span>계정문의</span>
            <span>입점문의</span>
          </CenterItem>
        </FooterCenter>
        <div>
          <Flex>
            <FlexItemOne>
              <p>대표: 박채연</p>
              <p>사업자등록번호 : 231-85-03914</p>
              <p className="underline">사업자확인</p>
              <p>통신판매 신고번호: 2023-위코드-0131</p>
            </FlexItemOne>
          </Flex>
          <Flex>
            <FlexItemTwo>
              <p>주소 : 서울시 테헤란로 427 위워크 타워 10층 </p>
              <p>정보보호 책임자 : 백종호</p>
              <p>쉘위 주식회사 대표 전화 : 010 - 7942 - 7942</p>
              <p>이메일 : cccoders313@gmail.com </p>
            </FlexItemTwo>
          </Flex>
          <NicePay>
            <p>
              쉘위는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에
              대해 쉘위는 책임을 지지 않습니다. 고객님의 안전거래를 위해 현금 등으로 결제 시 저희
              쇼핑몰에서 가입한 NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
            </p>
          </NicePay>
          <NicePay>
            <p className="underline">서비스가입사실확인</p>
          </NicePay>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  min-width: 1400px;
  height: 30vh;
  padding: 30px;

  border-top: 1px solid #e0e0e0;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 60%;
  margin: auto;

  ${FooterTop} {
    margin-bottom: 50px;
  }
`;

const TopText = styled.div`
  width: 30%;

  .medium-text {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .small-text {
    font-size: 12px;
    color: #3e3e3e;
  }
`;
const TopImgBox = styled.div`
  width: 30%;

  .icon {
    width: 25px;
    height: 25px;
    padding: 4px;
    background-color: #eee;
    border-radius: 100%;
    margin-right: 10px;
    margin-bottom: 40px;

    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;

    &:hover {
      background-color: #fcf1d8;
      transform: rotate(15deg) scale(1.2);
    }
  }

  .icon.insta {
    color: purple;
  }
  .icon.youtube {
    color: red;
  }
  .icon.kakao {
    color: #ffe812;
  }
  .icon.facebook {
    color: blue;
  }
  .icon.naver {
    color: green;
  }
`;

const CenterItem = styled.div`
  width: 17%;
  font-size: 12px;
  font-weight: 600;

  display: flex;
  justify-content: space-between;
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 20px;
`;

const FlexItemOne = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;

  .underline {
    text-decoration: underline;
  }
`;

const FlexItemTwo = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  color: #707070;

  p {
    margin-bottom: 5px;
  }
`;

const NicePay = styled.div`
  display: flex;
  width: 55%;
  word-break: keep-all;
  margin-top: 27px;
  font-size: 12px;
  color: #b2b2b2;

  .underline {
    text-decoration: underline;
  }
`;
