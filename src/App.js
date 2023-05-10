import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewPane from "./components/PreviewPane";
import "./styles/App.scss";
import "./styles/PreviewPanel.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isPreview: false,
      cvApp: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    if (this.handleErrors(form)) {
      let formData = new FormData(form);

      let dataJSON = Object.fromEntries(formData);
      this.setState({
        cvApp: dataJSON,
        isPreview: true,
      });
    } else {
      return;
    }
  }
  handleErrors(form) {
    const expForm = form.childNodes[1].childNodes[1];
    const eduForm = form.childNodes[2].childNodes[1];
    if (expForm.className === "modular-form-section") {
      alert("Please Save Work Experience Module");
      return false;
    }
    if (eduForm.className === "modular-form-section") {
      alert("Please Save Education Module");
      return false;
    }

    return true;
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <EditPane />
          <button type="submit" onClick={() => this.handleSubmit}>
            Preview
          </button>
        </form>
        {this.state.isPreview ? (
          <PreviewPane
            cv={this.state.cvApp} //UNCOMMENT FOR BUILD
            callback={() => this.setState({ isPreview: false })}
          />
        ) : null}
      </>
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
