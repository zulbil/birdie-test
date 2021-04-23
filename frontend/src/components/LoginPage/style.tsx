import styled, { createGlobalStyle } from "styled-components";
import { Card, CircularProgress } from "@material-ui/core";

interface Props {
  isFetching: boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0 !important;
    font-family: serif;
    background-color: #F9F9F9;
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

export const StyledCard = styled(Card)`
  text-align: center;
  padding: 2%;
  width: 50%;
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
