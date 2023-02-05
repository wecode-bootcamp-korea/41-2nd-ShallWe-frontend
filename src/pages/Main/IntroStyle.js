import styled from 'styled-components';

const Main = styled.main`
  position: relative;
`;

const Progress = styled.div`
  position: fixed;
  width: 100%;
  height: 2px;
  background-color: black;
  z-index: 10000;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const MainPage = styled(Section)`
  padding-bottom: 50px;

  .imageWrap {
    height: 100vh;
  }

  .imageWrap .parallax_image {
    position: fixed;
    width: 100%;
    height: inherit;
    background-position: top center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    perspective: 300px;
  }
`;

const SubPage = styled(Section)`
  margin-top: 400px;
  min-height: 60vh;

  .innerWrap {
    position: relative;
  }

  .innerWrap .contWrap {
    margin: 0 auto;
    padding: 20px 40px;
    width: 700px;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .parallax_image {
    object-fit: cover;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    margin: 20px 0;
  }
`;

const LastPage = styled(SubPage)`
  margin-top: 200px;

  .innerWrap {
    width: 100%;
    padding: 50px 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .contWrap {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export { Main, Progress, MainPage, SubPage, LastPage };
