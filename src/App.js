import './App.css';
import React, {Component} from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
class App extends Component {
 
  render(){

    return (
      <div>
       <PersonalInfo/>
       <Education/>
       <Experience/>
      </div>
    );
  }
}

export default App;
