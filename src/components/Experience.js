import React, {Component} from 'react';
class Experience extends Component{
constructor(props){
    super(props)
}
render(){
    return(
        <fieldset>
            <legend>Work Experience</legend>
        <ul>

            <li>
                <label htmlFor = "company-name"><span>Company name</span>
                <input type = 'text' id = 'company-name' name='company' required ></input>
                </label>
            </li>
            <li>
            <label htmlFor = "position"><span>Position Title</span>
                <input type = 'text' id = 'position' name='position' required ></input>
                </label>
            </li>

            <li>
            <label htmlFor = "date-from"><span>Time worked</span>
                <input type = 'date' id = 'date-from' name= 'from-date'required ></input> required 
                <input type ='date' id = 'date-to' name='to-date'></input>
                </label>

            </li>
        </ul>
        </fieldset>

    )
}
}
export default Experience;