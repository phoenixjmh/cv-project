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
                schoolName:this.state.currName,
                study:this.state.currStudy,
                dateStudied:this.state.currStudyDate,
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
        <fieldset key={idx}>
                <legend> Educational Experience</legend>
                <div className='row'>

                <label htmlFor={"school-name"+idx}><span className='form-label'>School Name</span>
                    <input  type='text' id='school-name'onChange={(event)=>this.handleChange(event,idx)} ></input>
                </label>
                </div>
                <div className='row'>

                    <label  htmlFor="area-of-study"><span   className='form-label'>Area of study</span>
                    <input   type='text' id='area-of-study'onChange={(event)=>this.handleChange(event,idx)}  ></input>
                </label>
                </div>
                <div className='row'>

                    <label   htmlFor="date-of-study"><span   className='form-label'>Date studied</span>
                    <input   type='date' id='date-of-study'onChange={(event)=>this.handleChange(event,idx)}  ></input>
                    </label>
                </div>

                <button id='append-education-experience'onClick={this.appendModule}>Append to CV</button>
            </fieldset>
        )
    }
    render() {
        return (
            <div className='eduForm' key ={'eduForm'}>
            {this.state.modules.length>0? this.state.modules.map(item=>{
               return (
                <div key={item.index}>
                <input type='hidden'value ={JSON.stringify(item)} name = {"education-module"+item.index} key= {"education-module"+item.index}readOnly></input>
                   <div className='education-module' id = {'edu-div'+item.index} key={'edu-div'+item.index}>
               <p key={item.index+'school-name'}>{item.schoolName}</p>
               <p key ={'study'+item.index}>{item.study}</p>
               <p key ={'date'+item.index}>{item.studyDate}</p>
               </div>
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
            </div>
        )
    }
}
export default Education;