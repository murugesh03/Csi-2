import React from "react";
import NavBar from "./NavBar/NavBar";
import "./Header.scss";
import Typography from "@material-ui/core/Typography";
import CsiLogo from "../../assets/images/newogo.png";
import { Grid } from "@material-ui/core";
import { Facebook, Twitter, YouTube } from "@material-ui/icons";
const Header = () => {
  return (
    <Grid item md={12}>
      <div className="header">
        <div className="header-left">
          <img src={CsiLogo} alt="Csi Logo" />
          <Typography variant="h5" className="header-title">
            Church of South India - SYNOD
          </Typography>
        </div>
        <div className="social-media-icons">
          <Facebook className="icons" />
          <Twitter className="icons" />
          <YouTube className="icons" />
        </div>
      </div>

      <NavBar />
    </Grid>
  );
};

export default Header;
