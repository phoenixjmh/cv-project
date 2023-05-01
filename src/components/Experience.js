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
                <input type = 'text' id = 'company-name'></input>
                </label>
            </li>
            <li>
            <label htmlFor = "position"><span>Position Title</span>
                <input type = 'text' id = 'position'></input>
                </label>
            </li>

            <li>
            <label htmlFor = "date-from"><span>Time worked</span>
                <input type = 'date' id = 'date-from'></input>
                <input type ='date' id = 'date-to'></input>
                </label>

            </li>
        </ul>
        </fieldset>

    )
}
}
export default Experience;