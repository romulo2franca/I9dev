import React, { Component } from "react";
import DevProfile from "../devProfile/devProfile";
import DevData from "../../../data/devData.json";

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devProfile: DevData
    };
    console.log(this.state.devProfile);
  }

  render() {
    const {
      photoPath,
      name,
      email,
      github,
      linkedin,
      skills,
      description
    } = this.state.devProfile[0];
    return (
      <section id="section-devDashBoard" className="d-flex align-items-center justify-content-center">
        <div className="devDashBoard">
          <DevProfile
            photoPath={photoPath}
            name={name}
            email={email}
            github={github}
            linkedin={linkedin}
            skills={skills}
            description={description}
          />
        </div>
        <div id="myProjects">
          <div className="myProjects-1">
          <h2>Meus projetos</h2>
          </div>
          <div className="myProjects-1">
          <h2>qualquer outra coisa</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default DevDashBoard;
