import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import ProjectSearch from './ProjectSearch/ProjectSearch';
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectDetails from './ProjectDetails/ProjectDetails';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      theProject: {},
      selectedId: ''
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    axios
      .get(`http://localhost:5000/api/projects`)
      .then(responseFromApi => {
        const projectData = responseFromApi.data;
        this.setState({ projects: projectData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateProjects = () => {};

  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Column width={5} style={{ marginLeft: '1em' }}>
            <ProjectSearch projects={this.state.projects} />
            <ProjectsList
              projects={this.state.projects}
            />
          </Grid.Column>
          <Grid.Column width={10} style={{ marginTop: '8em' }}>
            <Route
              path={'/projects/:id'}
              exact
              component={ProjectDetails}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ProjectDashBoard;
