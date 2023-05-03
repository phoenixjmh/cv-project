import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewPane from "./components/PreviewPane";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isPreview: false,
      cvApp: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let form = e.target;

    let formData = new FormData(form);

    let dataJSON = Object.fromEntries(formData);
    this.setState({
      cvApp: dataJSON,
      isPreview: true,
    });
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type='submit' onClick={() => this.handleSubmit}>Preview</button>
        <EditPane />
        {this.state.isPreview ? <PreviewPane cv={this.state.cvApp}
          callback={this.retrieveForm} /> : null}

      </form>
    );
  }
}

class EditPane extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Experience />
        <Education />
      </>
    );
  }
}

export default App;
