import * as React from "react";
import {
  AppContainer,
  GlobalStyle,
  StyledCard,
  StyledCircularProgress,
  GridContainerStyle,
  GridItemStyle,
  GridItemBackground,
  LoginButton
} from "./style";
import { ErrorText } from "../ErrorText";
import { TextField } from "@material-ui/core";
import { Id } from "@store/auth/types";
import Title from "../Title";
import Subtitle from "../Subtitle";

// const PRIMARY_COLOR = '#6b61c4';

export interface ComponentState {
  id: string;
}

export interface StateProps {
  token: string;
  error: string;
  isFetching: boolean;
}

export interface DispatchProps {
  signIn: (id: Id) => void;
}

type Props = StateProps & DispatchProps;

export default class App extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  public render() {
    const { isFetching, error } = this.props;
    return (
        <>
          <AppContainer isFetching={this.props.isFetching}>
            <GridContainerStyle>
              <GridItemBackground>
                <div className="hero-text">
                  <h1 className="hero-title">Care with confidence</h1>
                  <p className="hero-sub-title">
                    Discover Birdie, your complete homecare software solution. Designed to
                  give you better visibility over your care and support older adults to live happily at home.
                  </p>
                  <div className="bg-hand">
                    {/* tslint:disable-next-line:max-line-length */}
                    <img src="https://assets.website-files.com/5d80c03f1edd7bd68fcdb623/5d9c8af856a5b0065ddac102_Hands%20We%20Care.svg" alt="Holding hands illustration" />
                  </div>
                </div>
              </GridItemBackground>
              <GridItemStyle>
                  <GlobalStyle />
                  {isFetching ? <StyledCircularProgress /> : null}
                    <StyledCard>
                      <Title>Login </Title>
                      <Subtitle>Use code we gave you to login to the service</Subtitle>
                      <TextField
                          error={error !== ""}
                          label="Code"
                          placeholder="Code"
                          value={this.state.id}
                          onChange={this.handleCodeChange}
                          margin="normal"
                          variant="outlined"
                          fullWidth={true}
                      />
                      <ErrorText>{error}</ErrorText>
                      <LoginButton
                          onClick={this.handleButtonClick}
                      >
                        Sign in
                      </LoginButton>
                    </StyledCard>
              </GridItemStyle>
            </GridContainerStyle>
          </AppContainer>
        </>
    );
  }

  private handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ id: event.target.value })

  private handleButtonClick = () => {
    const { id } = this.state;
    this.props.signIn({ id });
  }
}
