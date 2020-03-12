import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Cross from "../../../assets/images/background8.png";
import Sea from "../../../assets/images/background9.png";
import Costal from "../../../assets/images/background8-copy-7.png";
import "./News.scss";
const News = () => {
  return (
    <Fragment>
      <Grid item className="news-image">
        <Grid className="image1">
          <img src={Cross} alt="cross" />
          <div className="image-text1">Latest</div>
          <div className="image-text2">
            Christian Education Department of the CSI
          </div>
        </Grid>
        <Grid className="image2">
          <img src={Sea} alt="sea" />
          <div className="image-text3">
            Christian Education Department of the CSI
          </div>
        </Grid>
        <Grid className="image3">
          <img src={Sea} alt="sea" />
          <div className="image-text3">
            Christian Education Department of the CSI
          </div>
        </Grid>
        <Grid className="image4">
          <img src={Costal} alt="sea" />
          <div className="image-text4">Latest</div>
          <div className="image-text5">
            Christian Education Department of the CSI
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default News;
