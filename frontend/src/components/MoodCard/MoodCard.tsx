import * as React from "react";
import { Card, CardContent, CircularProgress, Grid } from "@material-ui/core";
import { Mood } from "@store/statistics/types";
import { ErrorText } from "../ErrorText";
import MoodIcon from "../MoodIcon";
import Title from "../Title";

interface Props {
  moods: Mood[];
  isFetching: boolean;
  error: string;
}

export default function Timeline(props: Props) {
  const { moods, isFetching, error } = props;

  const RenderTimeline = () => {
    return (
      <Grid container={true} direction="row">
        <Grid item={true} xs={1} />
        <Grid item={true} xs={10}>
          <Title>Current mood</Title>
        </Grid>
        <Grid item={true} xs={1}>
          <MoodIcon mood={moods[0].mood} size={70} />
        </Grid>
      </Grid>
    );
  };

  const renderErrorOrCard = () => {
    return error !== "" ? <ErrorText>{error}</ErrorText> : <RenderTimeline />;
  };

  return (
    <Card>
      <CardContent>
        {isFetching ? <CircularProgress /> : renderErrorOrCard()}
      </CardContent>
    </Card>
  );
}
