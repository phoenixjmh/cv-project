import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewPane from "./components/PreviewPane";
import  './styles/App.scss'

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
    const DEBUG_OBJ = { name: "Phoenix Hollingsworth", email: "phoenixj@j.j", phone: "8058361651", workmodule0: '{"companyName":"Big Walmart","position":"f","datefrom":null,"dateto":null,"description":"fasdfasdfasdfasdf","index":0}', workmodule1: `{"companyName":"Ranch house","position":"assCompoany","datefrom":"2020-02-02","dateto":"2020-02-02","description":"BIggest effing weiner you've ever even seen","index":1}`, educationmodule0: '{"schoolName":"Vista Ridge High School","study":"Boobs mostly","dateStudied":"2011-02-02","index":0}' }
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
          cv = {DEBUG_OBJ}     //DEBUG


            // cv={this.state.cvApp}     //UNCOMMENT FOR BUILD

            
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



// { name: "Phoenix Hollingsworth", email: "phoenixj@j.j", phone: "8058361651", workmodule0: '{"companyName":"Big Walmart","position":"f","datefrom":null,"dateto":null,"description":"fasdfasdfasdfasdf","index":0}', workmodule1: `{"companyName":"Ranch house","position":"assCompoany","datefrom":"2020-02-02","dateto":"2020-02-02","description":"BIggest effing weiner you've ever even seen","index":1}`, educationmodule0: '{"schoolName":"Vista Ridge High School","study":"Boobs mostly","dateStudied":"2011-02-02","index":0}' }
export default App;
