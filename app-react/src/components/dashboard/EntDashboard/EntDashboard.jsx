import React, { Component } from "react";
import NavBar1 from "../shared/NavBar/navBar1";
import Info from "../shared/info/Info"
import ProfileCard from "../shared/ProfileCard/ProfileCard"
import LastProjects from "../shared/lastProjects/LastProjects"
import StatusCard from "../shared/statusCard/StatusCard"
import { Grid, GridColumn } from "semantic-ui-react"

class EntDashboard extends Component {
     constructor(props) {
    super(props);
    this.state = {};
  }
   
  render() {
    return (
      <div>
        <NavBar1 />
        <Grid columns={3} id="grid" stackable container doubling>
          <Grid.Row>
            <ProfileCard />
            <Grid.Column width={7}>
              <Info />
              <StatusCard />
            </Grid.Column>
            <GridColumn width={5}>
              <LastProjects />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EntDashboard;
