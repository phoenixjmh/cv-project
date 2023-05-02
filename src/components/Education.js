import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <fieldset>
                <legend> Educational Experience</legend>
                <ul>
                    <li>
                <label htmlFor="school-name"><span className='form-label'>School Name</span>
                    <input type='text' id='school-name'name = 'school'required ></input>
                </label>

                    </li>
                    <li>
                    <label htmlFor="area-of-study"><span className='form-label'>Area of study</span>
                    <input type='text' id='area-of-study'name = 'study'required ></input>
                </label>
                    </li>
                    <li>
                    <label htmlFor="date-of-study"><span className='form-label'>Date studied</span>
                    <input type='date' id='date-of-study'name = 'study-date'required ></input>
                    </label>
                    </li>
                </ul>
            </fieldset>
        )
    }
}
export default Education;