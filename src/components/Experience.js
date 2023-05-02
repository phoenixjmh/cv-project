import React, {Component} from 'react';
class Experience extends Component{
constructor(props){
    super(props)
    this.displayForm=this.displayForm.bind(this);
    this.appendModule=this.appendModule.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
        expModules:0,
        currName:null,
        currPosition:null,
        currFromDate:null,
        currToDate:null,
        modules:[]
        

        
    }
}
handleChange(e,idx){
    if(e.target.id==='company-name')
        this.setState({currName:e.target.value})

    
    if(e.target.id==='position')
        this.setState({currPosition:e.target.value})

    if(e.target.id==='date-from')
        this.setState({currFromDate:e.target.value})

        if(e.target.id==='date-to')
        this.setState({currToDate:e.target.value})


    
    // console.log(this.state);
   
}
appendModule(e){
    e.preventDefault();
    this.setState({
        modules:this.state.modules.concat({
            name:this.state.currName,
            position:this.state.currPosition,
            datefrom:this.state.currFromDate,
            dateto:this.state.currToDate
        })
    })
    this.setState({
        currName:null,
        currStudy:null,
        currStudyDate:null
    })
    console.log(this.state.modules);
    
}

render() {
    return (
        <>
        {this.state.expModules>0? this.displayForm(this.state.expModules):<></>}
        <button id='add-exp' onClick={(e)=>{
            e.preventDefault();
            this.setState({
                expModules:this.state.expModules+1
            });
            console.log(this.state.expModules);
        }}>Add</button>
        </>
    )
}
displayForm(){
    return(
        <fieldset>
            <legend>Work Experience</legend>
        <ul>

            <li>
                <label htmlFor = "company-name"><span>Company name</span>
                <input type = 'text' id = 'company-name' name='company' 
                onChange={this.handleChange} required ></input>
                </label>
            </li>
            <li>
            <label htmlFor = "position"><span>Position Title</span>
                <input type = 'text' id = 'position' name='position'
                onChange={this.handleChange} required ></input>
                </label>
            </li>

            <li>
            <label htmlFor = "date-from"><span>Time worked</span>
                <input type = 'date' id = 'date-from' name= 'from-date'
                onChange={this.handleChange}required ></input> required 
                <input type ='date' id = 'date-to' name='to-date'
                onChange={this.handleChange}></input>
                </label>

            </li>
        </ul>
        <button id='append-work-experience'onClick={this.appendModule}>Append to CV</button>

        </fieldset>

    )
}
}
export default Experience;