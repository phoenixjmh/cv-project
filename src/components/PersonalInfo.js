import React, {Component} from 'react';

class PersonalInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <fieldset>
                <legend>
                    Personal Info
                </legend>
                <ul>

                <li>
                    <label htmlFor='name' > <span className='form-label'>Name</span>
                    <input type='text' name='name' required ></input> </label>

                </li>
                <li>
                    <label htmlFor='email'> <span className='form-label'>Email</span>
                    <input type='email' id = 'email'name='email ' required ></input> </label>

                </li>
                    <li>
                    <label htmlFor='phone'> <span className='form-label'>Phone Number</span>
                    <input type='tel'id = 'phone'name = 'phone' required ></input> </label>
                    </li>

           </ul>
            </fieldset>
        )
    }
}
export default PersonalInfo;
