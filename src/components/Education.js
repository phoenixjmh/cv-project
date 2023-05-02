import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props)
        this.displayForm=this.displayForm.bind(this);
        this.appendModule=this.appendModule.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            eduModules:0,
            currName:null,
            currStudy:null,
            currStudyDate:null,
            index:0,
            modules:[]
            

            
        }
    }

    handleChange(e,idx){
        if(e.target.id==='school-name')
            this.setState({currName:e.target.value})

        
        if(e.target.id==='area-of-study')
            this.setState({currStudy:e.target.value})

        if(e.target.id==='date-of-study')
            this.setState({currStudyDate:e.target.value})

        
        // console.log(this.state);
       
    }

    appendModule(e){
        e.preventDefault();
        this.setState({index:this.state.index+1})
        this.setState({
            modules:this.state.modules.concat({
                name:this.state.currName,
                study:this.state.currStudy,
                date:this.state.currStudyDate,
                index:this.state.index
            })
        })
        this.setState({
            currName:null,
            currStudy:null,
            currStudyDate:null,
            
        })
        console.log(this.state.index);
        
    }
    
    displayForm(idx){
        return(
        <fieldset>
                <legend> Educational Experience</legend>
                <ul>
                    <li>
                <label htmlFor={"school-name"+idx}><span className='form-label'>School Name</span>
                    <input type='text' id='school-name'name = 'school' onChange={(event)=>this.handleChange(event,idx)}required ></input>
                </label>

                    </li>
                    <li>
                    <label htmlFor="area-of-study"><span className='form-label'>Area of study</span>
                    <input type='text' id='area-of-study'name = 'study' onChange={(event)=>this.handleChange(event,idx)} required ></input>
                </label>
                    </li>
                    <li>
                    <label htmlFor="date-of-study"><span className='form-label'>Date studied</span>
                    <input type='date' id='date-of-study'name = 'study-date' onChange={(event)=>this.handleChange(event,idx)} required ></input>
                    </label>
                    </li>
                </ul>
                <button id='append-education-experience'onClick={this.appendModule}>Append to CV</button>
            </fieldset>
        )
    }
    render() {
        return (
            <>
            {this.state.modules.length>0? this.state.modules.map(item=>{
               return (
                   <div className='education-module'id = {'edu-module'+item.index} key={'edu-module'+item.index}>
                    {console.log(item.index)}
               <p>{item.name}</p>
               <p>{item.study}</p>
               <p>{item.date}</p>
               </div>
               )
            }):0}
            {this.state.eduModules>0? this.displayForm(this.state.eduModules):<></>}
            <button id='add-school' onClick={(e)=>{
                e.preventDefault();
                this.setState({
                    eduModules:this.state.eduModules+1,
                    idx:0
                    
                });
                console.log(this.state.eduModules);
            }}>Add</button>
            </>
        )
    }
}
export default Education;