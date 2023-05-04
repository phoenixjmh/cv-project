import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="piForm form-section">
          <h3 className='section-label'>Personal Info</h3>

          <div className="row">
            <label htmlFor="name">
              {" "}
              <span className="form-label">Name</span>
              <input type="text" name="name" ></input>{" "}
            </label>
          </div>

          <div className="row">
            <label htmlFor="email">
              {" "}
              <span className="form-label">Email</span>
              <input type="email" id="email" name="email" ></input>{" "}
            </label>
          
            <label htmlFor="phone">
              {" "}
              <span className="form-label">Phone Number</span>
              <input type="tel" id="phone" name="phone" ></input>{" "}
            </label>
          </div>
      </div>
    );
  }
}
export default PersonalInfo;
