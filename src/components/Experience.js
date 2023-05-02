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
        index:0,
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
    this.setState({index:this.state.index+1})
    this.setState({
        
        modules:this.state.modules.concat({
            companyName:this.state.currName,
            position:this.state.currPosition,
            datefrom:this.state.currFromDate,
            dateto:this.state.currToDate,
            index:this.state.index
        })
    })
    this.setState({
        currName:null,
        currPosition:null,
        currFromDate:null,
        currToDate:null,
    })
    console.log(this.state.modules);
    
}

displayForm(){
    return(
        
        <fieldset key="Formb">
            <legend>Work Experience</legend>
                <div className='row'>
                <label htmlFor = "company-name"><span>Company name</span>
                <input type = 'text' id = 'company-name' 
                onChange={this.handleChange} ></input>
                </label>

                </div>
                <div className='row'>
            <label htmlFor = "position"><span>Position Title</span>
                <input type = 'text' id = 'position' 
                onChange={this.handleChange} ></input>
                </label>

                </div>
                <div className='row'>

            <label htmlFor = "date-from"><span>Time worked</span>
                <input type = 'date' id = 'date-from'
                onChange={this.handleChange}></input> 
                <input type ='date' id = 'date-to' onChange={this.handleChange}></input>
                </label>
                </div>

        <button id='append-work-experience'onClick={this.appendModule}>Append to CV</button>

        </fieldset>

)
}
render() {
    return (
        <>
         {this.state.modules.length>0? this.state.modules.map(item=>{
            return(
               <div key={item.index}> 
               <input type = 'hidden' value ={JSON.stringify(item)} name = {'work-module'+item.index} key = {'work-module'+item.index} readOnly></input>
               
                <div className='work-module' id = {'work-div'+ item.index}key={'work-div'+item.index}>
                    <p key={item.index+'companyName'}>{item.companyName}</p>
                    <p key={item.index+'position'}>{item.position}</p>
                    <p key={item.index+'date-from'}>{item.datefrom}</p>
                    <p key={item.index+'date-to'}>{item.dateto}</p>
                </div>
                </div>
            )
        }):0}
        {this.state.expModules>0? this.displayForm(this.state.expModules):<></>}
        <button id='add-exp' onClick={(e)=>{
            e.preventDefault();
            this.setState({
                expModules:this.state.expModules+1,
                
            });
            console.log(this.state.expModules);
        }}>Add</button>
        </>
    )
}
}
export default Experience;