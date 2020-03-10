import React from "react";
import { Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import TabPanel from "@material-ui/core/Tabs";
import "./NavBar.scss";
// import TabPanel from '@material-ui/core'

const NavBar = () => {
  return (
    <Grid>
      <AppBar position="static">
        <Tabs className="tabs" centered>
          <Tab label="SYNOD News" />
          <Tab label="SYNOD Events" />
          <Tab label="Dioceses" />
          <Tab label="CSI Life" />
          <Tab label="Publications" />
          <Tab label="Campaigns" />
        </Tabs>
      </AppBar>
      <TabPanel>Item One</TabPanel>
      <TabPanel>Item Two</TabPanel>
      <TabPanel>Item Three</TabPanel>
    </Grid>
  );
};

export default NavBar;
