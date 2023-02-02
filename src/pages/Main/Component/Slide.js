import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import poster from './SlideData';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        {poster.map((item) => {
          return (
            <ImageContainer key={item.id}>
              <Image src={item.img} />
            </ImageContainer>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default SimpleSlider;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 50px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;

  cursor: pointer;
`;
