import React from "react";
import { Container, Grid } from "@material-ui/core";
import News from "./News/News";

const MainArea = () => {
  return (
    <Container>
      <Grid container>
        <News />
      </Grid>
    </Container>
  );
};

export default MainArea;
