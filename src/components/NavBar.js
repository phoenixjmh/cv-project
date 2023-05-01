import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <button onClick={this.props.callback1}>Edit</button>
        <button type = 'submit' onClick= {this.props.callback2}>Preview</button>
        </>

        )
    }
}

export default Navbar;