import styled, { createGlobalStyle } from "styled-components";
import { CircularProgress } from "@material-ui/core";

interface Props {
  isFetching: boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0 !important;
    font-family: serif;
    > div {
      height: 100%;
    }
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: ${(props: Props) => (props.isFetching ? "blur(8px)" : "blur(0px)")};
`;

export const StyledCard = styled.div`
  text-align: center;
  padding: 2%;
  width: 50%;
  border: none;
  border-radius: 0px;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  bottom: 47%;
  right: 47%;
  position: absolute;
  z-index: 999;
`;

export const GridContainerStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GridItemStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;
export const LoginButton = styled.button`
margin-top: .5rem;
margin-bottom: .5rem;
margin-left: 30px;
padding: 1rem 1.5rem;
border: 4px #000;
border-radius: 4px;
background-color: #0459b4;
box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 25%);
font-size: 1rem;
font-weight: 500;
text-align: center;
min-width: 10rem;
padding: .5rem 1rem;
display: inline-block;
padding: 9px 15px;
color: #fff;
`;
export const GridItemBackground = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: #54c5c1;
  > div {
    background-image: url(https://assets.website-files.com/5d80c03…/5d88c29…_primary-teal-squiggle.svg);
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero-text {
        padding-right: 2rem;
        width: 50%;
        .hero-title {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #00254d;
          font-size: 3.75rem;
          line-height: 100%;
          font-weight: 500;
      }
      .hero-sub-title {
          margin-bottom: 0;
          color: #00254d;
          font-size: 1.25rem;
          line-height: 150%;
          font-weight: 400;
      }
      .bg-hand {
        background-image: url('./assets/images/Hands_we_care.svg');
      }
  }
`;
