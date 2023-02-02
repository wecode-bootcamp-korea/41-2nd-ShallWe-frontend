import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { API } from '../../../config';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movieIcon from './images/movie.png';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MiniSlider = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${API.CATEGORY}`)
      .then((result) => result.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <SliderTilte>
        <img src={movieIcon} alt="movie" />
        <SliderTitleLeft>
          <span>ShallWe의 PICK</span>
          <p>이 영화는 어때요?</p>
        </SliderTitleLeft>
        <SliderTitleRight>
          <ProductLink to="/Category">
            <span>더보기</span>
            <span>
              <AiOutlineRight />
            </span>
          </ProductLink>
        </SliderTitleRight>
      </SliderTilte>
      <SliderContentsContainer>
        <Slider {...settings}>
          {product.map((item, id) => {
            return (
              <SlideCard>
                <ProductLink key={id} to={`/Category/${id}`}>
                  <SlideCardTop>
                    <img src={item.thumbnail} alt={item.title} />
                  </SlideCardTop>
                </ProductLink>
                <SlideCardBottom>
                  <ProductLink key={id} to={`/Category/${id}`}>
                    <h1>{item.title}</h1>
                    <h3>{parseInt(item.price)}원</h3>
                    <p>{item.movieGenre[0].movieGenreName}</p>
                    <PlaceTime>
                      <p>{item.meetingData[0].meetingPlaceAddress}</p>
                      <p>{item.meetingData[0].meetingTime}</p>
                    </PlaceTime>
                  </ProductLink>
                </SlideCardBottom>
              </SlideCard>
            );
          })}
        </Slider>
      </SliderContentsContainer>
    </>
  );
};

export default MiniSlider;

const SliderTilte = styled.div`
  width: 1200px;
  display: flex;
  font-weight: 700;
  padding: 0px 25px;
  margin: 50px auto 20px;
  img {
    margin-right: 10px;
    width: 45px;
  }
`;
const ProductLink = styled(Link)`
  text-decoration: none;
`;

const SliderTitleLeft = styled.div`
  text-align: left;
  span {
    display: block;
    font-size: 22px;
  }
  p {
    font-size: 18px;
    color: rgb(255, 180, 59);
  }
`;

const SliderTitleRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #007aff;
  cursor: pointer;

  span {
    margin-bottom: 2.5px;
    text-decoration: none;
  }
  div {
    width: 15px;
    margin-left: 5px;
    color: #007aff;
  }
`;

const SliderContentsContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const SlideCard = styled.div`
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const SlideCardTop = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 5px;
  cursor: pointer;

  img {
    background-color: gray;
    height: 250px;
    object-fit: contain;
    margin: 10px auto;
    transition: all 0.2s linear;
    border-radius: 5px;
    &:hover {
      transform: scale(1.08);
    }
  }
`;
const SlideCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  margin-bottom: 25px;
  padding-top: 15px;
  width: 250px;
  margin: 0 auto;
  h1 {
    height: 41px;
    font-size: 15px;
    color: rgb(62, 62, 62);
    font-weight: bold;
    text-align: left;
    line-height: normal;
    overflow: hidden;
  }
  h3 {
    color: rgb(62, 62, 62);
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    line-height: 15px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: rgb(112, 112, 112);
    margin-bottom: 10px;
  }
  div {
    display: flex;
    width: 180px;
    flex-direction: column;
    font-size: 13px;
    font-weight: normal;
    color: rgb(112, 112, 112);
    text-align: left;
    border-top: 0.5px solid rgb(235, 235, 235);
    padding-top: 8px;
    font-weight: bold;
    span {
      margin-bottom: 5px;
    }
  }
`;
const PlaceTime = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    font-size: 12px;
  }
`;
const NextButton = styled.div`
  position: relative;
  top: -243px;
  left: 1200px;
  border-radius: 50px;
  background-color: lightgray;
  display: block;
  color: gray;
  width: 25px;
  height: 25px;
  padding: 2.5px 2.5px;
  &:hover {
    background-color: #b0b0b0;
  }
`;

const PrevButton = styled.div`
  position: relative;
  top: 200px;
  right: 320px;
  border-radius: 50px;
  background-color: lightgray;
  display: block;
  color: gray;
  width: 25px;
  height: 25px;
  padding: 2.5px 2.5px;
  &:hover {
    background-color: #b0b0b0;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 4,
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
