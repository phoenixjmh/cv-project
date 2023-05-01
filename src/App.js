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
    isPreview:false
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

}
// submitForPreview(){

// this.setState({isPreview:true})
// }
render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <Navbar callback1={()=>this.setState({isPreview:false})} callback2={this.submitForPreview}/>
        {console.log(this.state.isPreview)}
        {this.state.isPreview===false? <EditPane/>:<PreviewPane/> }

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
render(){
  return <>Damn preview time</>
}

}
export default App;
