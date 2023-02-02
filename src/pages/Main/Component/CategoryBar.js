import React from 'react';
import { useNavigate } from 'react-router';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import theater from './images/theater.png';
import test from './images/test.png';
import animation from './images/animation.png';
import documentary from './images/documentary.png';
import { AiOutlineRight } from 'react-icons/ai';

function CategoryBar() {
  const navigate = useNavigate();

  const moveLink = () => {
    navigate('/category');
  };

  return (
    <>
      <CategoryBarContainer>
        <CategoryBarWrapper>
          {CARTEGOTY_CONTENTS.map((data, i) => {
            return (
              <CategoryContents key={i} onClick={moveLink}>
                <CategoryBarImg src={data.img} />
                <CategoryBarLabel>{data.title}</CategoryBarLabel>
              </CategoryContents>
            );
          })}
        </CategoryBarWrapper>
      </CategoryBarContainer>
      <RecommendBar>
        <div>Shall We 추천 PICK!</div>
        <span>
          <AiOutlineRight />
        </span>
      </RecommendBar>
    </>
  );
}

export default CategoryBar;

const CategoryBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const CategoryBarWrapper = styled.div`
  max-width: 880px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryContents = styled.div`
  width: 78px;
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CategoryBarImg = styled.img`
  width: 44px;
  margin: 10px auto;
`;
const CategoryBarLabel = styled.label`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
`;
const RecommendBar = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 44px;
  margin: 10px auto 50px;
  background-color: rgb(0, 151, 243);
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  ${theme.common.flexCenter}
  div {
    font-weight: 500;
  }
  span {
    margin-left: 35px;
  }
`;

const CARTEGOTY_CONTENTS = [
  { id: 1, title: '극/영화', img: `${theater}` },
  { id: 2, title: '다큐', img: `${documentary}` },
  { id: 3, title: '애니메이션', img: `${animation}` },
  { id: 4, title: '실험영화', img: `${test}` },
];
