import './App.css';
import React, {Component} from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/NavBar';
class App extends Component {

 constructor(){
  super()
  this.state={
    isPreview:false,
    cvApp:null
  }
// this.submitForPreview=this.submitForPreview.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(e){
e.preventDefault();
let form=e.target;

let formData = new FormData(form);

let dataJSON = Object.fromEntries(formData);
console.log(dataJSON);
this.setState({
  cvApp:dataJSON,
  isPreview:true
})

}

render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <Navbar callback1={()=>this.setState({isPreview:false})} callback2={()=>this.handleSubmit}/>
        {console.log(this.state.isPreview)}
        {this.state.isPreview===false? <EditPane/>:<PreviewPane cv= {this.state.cvApp}/> }

      </form>
    );
  }
}




class EditPane extends Component{

  render(){

    return(
      <>
      <PersonalInfo/>
         <Education/>
         <Experience/>
      </>
    )
  }

  
}
class PreviewPane extends Component{
  constructor(props){
    super(props)
  }

render(){
  const cv=this.props.cv;
  return (<>
      {cv.name}
    </>
    )
}

}
export default App;
