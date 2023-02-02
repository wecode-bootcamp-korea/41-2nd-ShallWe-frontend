import React, { useEffect, useState, useRef } from 'react';
import { API } from '../../config';
import styled from 'styled-components';
import ProductCards from './ProductCard';
import theme from '../../styles/theme';
import { AiOutlineDown } from 'react-icons/ai';
import check from './images/check.png';
import { data } from 'jquery';

const Category = () => {
  const [modalSwitcher, setModalSwitcher] = useState(-1);
  const [modalStatus, setModalStatus] = useState(false);
  const [selectOption, setSelectOption] = useState(-1);

  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loadFin, setLoadFin] = useState(false);

  const fetchmovieData = async (page) => {
    const res = await fetch(`http://152.67.208.118:3000/shallWeMovie/category?page=${page}`);
    const data = await res.json();
    setMovieData((prev) => [...prev, ...data]);
    setLoadFin(true);
  };

  console.log(movieData);

  useEffect(() => {
    fetchmovieData(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const pageEnd = useRef();

  useEffect(() => {
    if (!loadFin) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.7 }
    );
    observer.observe(pageEnd.current);
  }, [loadFin]);

  const handleShowModal = () => {
    setModalSwitcher(movieData.id);
    setModalStatus(!modalStatus);
  };

  return (
    <>
      <CategoryContainer>
        {movieData[0] && (
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
                          <FilterModal display={modalSwitcher === option.id}>
                            <FilterValueWrapper>
                              {option.value.map((result, id) => {
                                return (
                                  <ValueCheckBox key={id}>
                                    <CheckBox
                                      key={id}
                                      onClick={() => {
                                        setSelectOption(id);
                                        if (selectOption === id) {
                                          setSelectOption(null);
                                        }
                                      }}>
                                      <img src={check} display={selectOption === id} alt="체크" />
                                    </CheckBox>
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
                    <span>{movieData[0].count}건의 결과가 있어요</span>
                  </ProductStateBar>
                  <CategoryProductCardWrapper>
                    {movieData.map((result, id) => {
                      return <ProductCards key={id} result={result} />;
                    })}
                  </CategoryProductCardWrapper>
                </ProductList>
              </ProductListWrapper>
            </CategoryContents>
          </ContentsWrapper>
        )}
        <div ref={pageEnd} />
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
  width: 1300px;
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
  display: none; // 장르버튼 필터링 추가구현 예정
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
  justify-content: flex-start;

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
  background-color: white;
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
  align-items: center;
`;

const CheckBox = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  background-color: #e0e0e0;
  border: none;
  img {
    display: ${({ display }) => (display ? 'flex' : 'none')};
    width: 15px;
    position: relative;
    right: 5px;
  }
`;

const FILTEROPTION = [
  { id: 1, title: '장르', value: ['극/영화', '다큐', '애니메이션', '실험영화'] },
];
