import React from 'react';
import styled from 'styled-components';

const SearchItem = () => {
  return (
    <SearchRemove>
      <SearchRemoveWapper>
        <SearchRemoveBox>
          <SearchRemoveBoxRecent>최근 검색</SearchRemoveBoxRecent>
          <SearchRemoveBoxButton>모두 지우기</SearchRemoveBoxButton>
        </SearchRemoveBox>
        <SearchRemoveBoxNoData>최근 검색어가 없습니다.</SearchRemoveBoxNoData>
      </SearchRemoveWapper>
    </SearchRemove>
  );
};

const SearchRemove = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px 0px 100px;
`;

const SearchRemoveWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 0px 69px;
  max-width: 1144px;
`;

const SearchRemoveBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchRemoveBoxRecent = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const SearchRemoveBoxButton = styled.button`
  border: none;
  background-color: white;
  font-size: 13px;
  font-weight: 500;
  color: #707070;
  cursor: pointer;
`;

const SearchRemoveBoxNoData = styled.div`
  color: #707070;
  font-size: 13px;
`;

export default SearchItem;
