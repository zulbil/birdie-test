import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { LogoutLink } from "@App/components/Header/style";

export interface ComponentState {}

interface StyleProps {
  classes: {
    root: string;
    title: string;
  };
}

interface InheritedProps {
  signOut: () => void;
}

type Props = StyleProps & InheritedProps;

export default class Dashboard extends React.Component<
  Props,
  ComponentState
> {
  public render() {
    const { classes } = this.props;
    const styleAppBar = { background : "#fff" };

    return (
      <header className={classes.root}>
        <AppBar position="static" style={styleAppBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {/* tslint:disable-next-line:max-line-length */}
              <img src="https://assets.website-files.com/5d80c03f1edd7bd68fcdb623/5d80c151ddf52828d3cff080_Birdie%20-%20Logo%20-%20Blue%20%2B%20Green.svg" alt="logo" />
            </Typography>
            <LogoutLink
              onClick={() => this.props.signOut()}  
            >
              Logout
            </LogoutLink>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
