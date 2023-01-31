import React, { useEffect, useState, useRef } from 'react';
import styled, { StyledComponent } from 'styled-components';
import CategoryModal from './CategoryModal';
import ProductCards from '../../components/ProductCards';
import theme from '../../styles/theme';
import { AiOutlineDown } from 'react-icons/ai';

const Category = () => {
  const [movieOption, setmovieOption] = useState([]);
  const [modalSwitcher, setModalSwitcher] = useState(-1);
  const [modalStatus, setModalStatus] = useState(false);

  const handleShowModal = () => {
    setModalSwitcher(movieOption.id);
    setModalStatus(!modalStatus);
  };

  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, finScroll);
    observer.observe(target.current);
  }, [target]);

  const finScroll = {
    threshold: 1.0,
  };

  const callback = () => {
    target = console.log('load');
  };

  useEffect(() => {
    fetch('/data/category.json')
      .then((result) => result.json())
      .then((data) => setmovieOption(data));
  }, []);

  return (
    <>
      <CategoryContainer>
        {movieOption && (
          <ContentsWrapper>
            <CategoryTitlePadding>
              <CategoryTitleWrapper>
                <CategoryTitleLeft>
                  <h1>전체상품</h1>
                  <span>ShallWe가 준비한 영화들을 만나보세요!</span>
                </CategoryTitleLeft>
                <CategoryTitleRight>
                  <img src="./images/category-greeting-icon.png" alt="ShallWeImg" />
                </CategoryTitleRight>
              </CategoryTitleWrapper>
            </CategoryTitlePadding>
            <CategoryContents>
              <CategoryButtonZoneWrapper>
                <CategoryButtonZone>
                  <CategoryButtonWrapper>
                    {FILTEROPTION.map((option, id) => {
                      return (
                        <>
                          <ButtonFilter
                            key={id}
                            onClick={() => {
                              handleShowModal();
                              if (modalSwitcher === option.id) {
                                return setModalSwitcher(null);
                              }
                              setModalSwitcher(option.id);
                            }}>
                            <span>{option.title}</span>
                            <AiOutlineDown className="downButton" />
                          </ButtonFilter>
                          {/* // {modal.id && ()} */}
                          <FilterModal display={modalSwitcher === option.id}>
                            <FilterValueWrapper>
                              {option.value.map((result, id) => {
                                return (
                                  <ValueCheckBox key={id}>
                                    <CheckBox />
                                    {result}
                                  </ValueCheckBox>
                                );
                              })}
                            </FilterValueWrapper>
                          </FilterModal>
                        </>
                      );
                    })}
                  </CategoryButtonWrapper>
                </CategoryButtonZone>
              </CategoryButtonZoneWrapper>
              <ProductListWrapper>
                <ProductList>
                  <ProductStateBar>
                    <span>{movieOption.length}건의 결과가 있어요</span>
                    <select>
                      <option value={'recommend'}>추천순</option>
                      <option value={'released'}>최신순</option>
                      <option value={'rating'}>평점순</option>
                    </select>
                  </ProductStateBar>
                  <CategoryProductCardWrapper>
                    <ProductCards product={movieOption} />
                  </CategoryProductCardWrapper>
                </ProductList>
              </ProductListWrapper>
            </CategoryContents>
          </ContentsWrapper>
        )}
        <div ref={target} />
      </CategoryContainer>
    </>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: 100%;
`;

const ContentsWrapper = styled.div``;

const CategoryTitlePadding = styled.div`
  display: flex;
  padding: 15px 69px;
`;

const CategoryTitleWrapper = styled.div`
  max-width: 1304px;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${theme.color.gray};
  border-radius: 10px;
  align-items: center;
  padding: 15px 40px;
`;

const CategoryTitleLeft = styled.div`
  font-size: 15px;
  line-height: 25px;

  h1 {
    font-weight: bold;
    font-size: 20px;
    padding-right: 1000px;
    margin-bottom: 12px;
  }
`;
const CategoryTitleRight = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CategoryContents = styled.div`
  padding: 40px 0px;
`;

const CategoryButtonZoneWrapper = styled.div`
  height: 150px; // 임시 높이값
  padding: 0 69px;
  border-bottom: 10px solid ${theme.color.gray};
  font-size: 13px;
  font-weight: normal;
  position: relative;
  margin: 0 auto 35px;
`;

const CategoryButtonZone = styled.div`
  width: 1300px;

  padding-bottom: 15px;
  margin: 0px auto;
`;

const CategoryButtonWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 0px auto;
`;

const ButtonFilter = styled.button`
  height: 40px;
  padding: 12px 12.7px 11px 10px;
  border: 1px solid ${theme.color.gray};
  margin-right: 15px;
  align-items: center;
  border: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  span {
    margin-right: 30px;
  }
`;

const ProductListWrapper = styled.div`
  padding: 0 auto;
  width: 100%;
`;

const ProductList = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
  height: auto;
`;

const ProductStateBar = styled.div`
  display: flex;
  width: 100%;
  margin: 45px, 0, 25px;
  align-items: center;
  justify-content: space-between;

  span {
    color: black;
  }

  select {
    padding-right: 24px;
    text-align: center;
    border-radius: 0;
    border: 0 none;
    display: block;
    background: none;
    cursor: pointer;
    outline-offset: 0px;
    height: 25px;
  }
`;

const CategoryProductCardWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FilterModal = styled.div`
  position: absolute;
  width: 350px;
  padding: 15px 20px 0;
  top: 50px;
  z-index: 10;
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 6px 0px;
  display: ${({ display }) => (display ? 'flex' : 'none')};
`;

const FilterValueWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const ValueCheckBox = styled.div`
  flex-basis: 50%;
  flex-grow: 0;
  max-width: 50%;
  margin-bottom: 22px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const CheckBox = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
`;

const FILTEROPTION = [
  { id: 1, title: '장르', value: ['액션', '멜로', '로코', 'SF', '호러'] },
  { id: 2, title: '날짜', value: ['cator', 'mike', 'nicer'] },
  { id: 3, title: '시간', value: ['cator', 'mike', 'nicer'] },
  { id: 4, title: '장소', value: ['cator', 'mike', 'nicer'] },
  { id: 5, title: 'HashTag', value: ['cator', 'mike', 'nicer'] },
];
