import React, { Fragment } from "react";
import { Grid, Container } from "@material-ui/core";
import News from "./News/News";
import "./MainArea.scss";
import Ribbon from "./News/Ribbon/Ribbon";

const MainArea = () => {
  return (
    <Fragment>
      <Container>
        <Grid className="main-area" container={true}>
          <News />
        </Grid>
      </Container>
      <Ribbon/>
    </Fragment>
  );
};

export default MainArea;
