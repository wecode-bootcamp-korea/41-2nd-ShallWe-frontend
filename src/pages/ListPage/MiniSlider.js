import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import theme from '../../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movieIcon from './images/movie.png';
import { AiOutlineRight } from 'react-icons/ai';
import { symbol } from 'prop-types';

const MiniSlider = () => {
  //부모 컴포넌트에서 받은 state와 method

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/data/category.json')
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
          <span>더보기</span>
          <div>
            <AiOutlineRight />
          </div>
        </SliderTitleRight>
      </SliderTilte>
      <SliderContentsContainer>
        <Slider {...settings}>
          {product.map((item) => {
            console.log(item);
            return (
              <SlideCard>
                <SlideCardTop>
                  <img src={item.thumbnail} alt={item.title} />
                </SlideCardTop>
                <SlideCardBottom>
                  <h1>{item.title}</h1>
                  <h3>{item.price}원</h3>
                  <p>{item.genre}</p>
                  <div>
                    <span># {item.place}</span>
                    <span># {item.date[0].time_1}</span>
                  </div>
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
  margin: 0 auto 20px;
  img {
    margin-right: 10px;
    width: 45px;
  }
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
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-end;
  color: #007aff;
  cursor: pointer;
  span {
    margin-bottom: 2.5px;
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

const SlideCard = styled.div``;
const SlideCardTop = styled.div`
  ${theme.common.flexCenter};
  img {
    width: 250px;
    height: 400px;
    object-fit: contain;
    border-radius: 20px;
  }
`;
const SlideCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  margin-bottom: 25px;
  padding-top: 15px;
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'relative',
        top: '-380px',
        left: '1200px',
        borderRadius: '50px',
        backgroundColor: 'lightgray',
        display: 'block',
        color: 'gray',
        width: '25px',
        height: '25px',
        cursor: 'pointer',
        padding: '2.5px 2.5px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'relative',
        top: '200px',
        right: '320px',
        borderRadius: '50px',
        backgroundColor: 'lightgray',
        display: 'block',
        color: 'gray',
        width: '25px',
        height: '25px',
        cursor: 'pointer',
        padding: '2.5px 2.5px',
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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

// const ButtonStyle = (props) => styled.div`
// const {className, style, onClick} = props;

// className : {className}
//       style = {{
//         ...style,
//         position: 'relative',
//         top: '-380px',
//         left: '1200px',
//         borderRadius: '50px',
//         backgroundColor: 'lightgray',
//         display: 'block',
//         color: 'gray',
//         width: '25px',
//         height: '25px',
//         cursor: 'pointer',
//         padding: '2.5px 2.5px',
//       }}
//       onClick :{onClick}
// `;
