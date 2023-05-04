import React, { Component } from "react";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.appendModule = this.appendModule.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      expModules: 0,
      currName: null,
      currPosition: null,
      currFromDate: null,
      currToDate: null,
      currDescription: null,
      index: 0,
      modules: [],
      isAdding: false,
    };
  }
  handleChange(e, idx) {
    if (e.target.id === "company-name")
      this.setState({ currName: e.target.value });

    if (e.target.id === "position")
      this.setState({ currPosition: e.target.value });

    if (e.target.id === "date-from")
      this.setState({ currFromDate: e.target.value });

    if (e.target.id === "date-to")
      this.setState({ currToDate: e.target.value });

    if (e.target.id === "job-description")
      this.setState({ currDescription: e.target.value });
  }
  appendModule(e) {
    e.preventDefault();
    this.setState({ index: this.state.index + 1, isAdding: false });
    this.setState({
      modules: this.state.modules.concat({
        companyName: this.state.currName,
        position: this.state.currPosition,
        datefrom: this.state.currFromDate,
        dateto: this.state.currToDate,
        description: this.state.currDescription,
        index: this.state.index,
      }),
    });
    this.setState({
      currName: null,
      currPosition: null,
      currFromDate: null,
      currToDate: null,
      currDescription: null,
    });
    console.log(this.state.modules);
  }

  displayForm() {
    return (
      <div className="modular-form-section">
        {this.state.isAdding ? (
          <>
            <div className="row">
              <label htmlFor="company-name">
                <span>Company name</span>
                <input
                  type="text"
                  id="company-name"
                  onChange={this.handleChange}
                ></input>
              </label>
            </div>
            <div className="row">
              <label htmlFor="position">
                <span>Position Title</span>
                <input
                  type="text"
                  id="position"
                  onChange={this.handleChange}
                ></input>
              </label>
            </div>

            <div className="row">
              <label htmlFor="job-description">
                <span>Job Description</span>
                <input
                  type="textarea"
                  id="job-description"
                  onChange={this.handleChange}
                ></input>
              </label>
            </div>

            <div className="row">
             
              <label htmlFor ="date-from">
              <span>Start Date:</span>
              <input
                type="date"
                id="date-from"
                onChange={this.handleChange}
              ></input>
              </label>
              <label htmlFor= "date-to">
              <span>End Date:</span>
              <input
                type="date"
                id="date-to"
                onChange={this.handleChange}
              ></input>

              </label>
            </div>

            <button id="append-work-experience" onClick={this.appendModule}>
              Save
            </button>
          </>
        ) : null}
      </div>
    );
  }
  render() {
    return (
      <div className="expForm form-section">
        <h3 className="form-label">Work experience</h3>
        {this.state.modules.length > 0
          ? this.state.modules.map((item) => {
              return (
                <div key={item.index}>
                  <input
                    type="hidden"
                    value={JSON.stringify(item)}
                    name={"workmodule" + item.index}
                    key={"workmodule" + item.index}
                    readOnly
                  ></input>

                  <div
                    className="work-module"
                    id={"work-div" + item.index}
                    key={"work-div" + item.index}
                  >
                    <p key={item.index + "companyName"}>{item.companyName}</p>
                    <p key={item.index + "position"}>{item.position}</p>
                    <p key={item.index + "description"}>{item.description}</p>
                    <p key={item.index + "datefrom"}>{item.datefrom}</p>
                    <p key={item.index + "dateto"}>{item.dateto}</p>
                  </div>
                </div>
              );
            })
          : null}
        {this.state.expModules > 0 ? (
          this.displayForm(this.state.expModules)
        ) : (
          <></>
        )}
        <>
          {!this.state.isAdding ? (
            <>
              <button
                id="add-exp"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    expModules: this.state.expModules + 1,
                    isAdding: true,
                  });
                  console.log(this.state.expModules);
                }}
              >
                {" "}
                + Add
              </button>
            </>
          ) : null}
        </>
      </div>
    );
  }
}
export default Experience;
