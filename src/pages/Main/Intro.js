import React, { useEffect } from 'react';
import Button from '../../components/Button';
import * as Styled from './IntroStyle';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const intro1 = process.env.PUBLIC_URL + '/images/intro1.avif';
  const intro2 = process.env.PUBLIC_URL + '/images/intro2.avif';
  const intro7 = process.env.PUBLIC_URL + '/images/intro7.avif';

  let imageArray = [intro7, intro2, intro1];
  const navigate = useNavigate();

  useEffect(() => {
    imageArray = window.document.querySelectorAll('.parallax_image');
    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener(scrollFunc);
    };
  }, []);

  const scrollFunc = () => {
    for (let i = 0; i < imageArray.length; i++) {
      imageArray[i].style.transform =
        'perspective(400px) translateZ(' + window.scrollY / (5 * (imageArray.length - i)) + 'px)';
    }
  };

  return (
    <>
      <Styled.Main>
        <Styled.Progress />
        <Styled.MainPage>
          <Styled.MainPage className="imageWrap">
            {imageArray.map((item) => (
              <img className="parallax_image" src={item} alt="parallax" />
            ))}
          </Styled.MainPage>
        </Styled.MainPage>

        <Styled.SubPage>
          <Styled.SubPage className="innerWrap">
            <Styled.SubPage className="contWrap">
              <img src="/images/intro3.jpeg" />
            </Styled.SubPage>
          </Styled.SubPage>
        </Styled.SubPage>

        <Styled.SubPage>
          <Styled.SubPage className="innerWrap">
            <Styled.SubPage className="contWrap">
              <img src="/images/intro4.jpeg" />
            </Styled.SubPage>
          </Styled.SubPage>
        </Styled.SubPage>

        <Styled.SubPage>
          <Styled.SubPage className="innerWrap">
            <Styled.SubPage className="contWrap">
              <img src="/images/intro6.jpeg" />
            </Styled.SubPage>
          </Styled.SubPage>
        </Styled.SubPage>

        <Styled.SubPage>
          <Styled.SubPage className="innerWrap">
            <Styled.SubPage className="contWrap">
              <Button onClick={() => navigate('/')}>Shall we watch a movie?</Button>
            </Styled.SubPage>
          </Styled.SubPage>
        </Styled.SubPage>

        <Styled.LastPage>
          <Styled.LastPage className="innerWrap" />
          <Styled.LastPage className="contWrap" />
        </Styled.LastPage>
      </Styled.Main>
    </>
  );
};

export default Main;
