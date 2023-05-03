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
        
        {this.state.isPreview === false ? (
          <>
        <button type = 'submit' onClick= {()=>this.setState({isPreview:true})}>Preview</button>
          <EditPane />
          </>
        ) : (
          // <PreviewPane cv={this.state.cvApp} />
          //DEBUG
          <PreviewPane cv={{
            name: "phoenix",
            email : "phoenixjmh@gmail.com",
            phone: "123-1234",
            educationmodule0: "{\"schoolName\":\"Vista ridge\",\"study\":\"High school\",\"dateStudied\":\"2012-02-20\",\"index\":0}",
            workmodule0: "{\"companyName\":\"Noso\",\"position\":\"Cook\",\"datefrom\":\"1992-02-05\",\"dateto\":\"1993-02-05\",\"index\":0}",
            workmodule1: "{\"companyName\":\"The ranch house\",\"position\":\"Cook\",\"datefrom\":\"2001-01-20\",\"dateto\":\"2009-02-02\",\"index\":1}",
            workmodule2: "{\"companyName\":\"Farmer and cook\",\"position\":\"Chef\",\"datefrom\":\"2022-02-20\",\"dateto\":\"2023-02-04\",\"index\":2}"
          }
          

          } callback={()=>this.setState({isPreview:false})}/>
          //ENDDEBUG
        )}
      </form>
    );
  }
}

class EditPane extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Education />
        <Experience />
      </>
    );
  }
}

export default App;
