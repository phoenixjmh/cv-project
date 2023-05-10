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
      isEditing: false,
      moduleJSON: null,
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
    if (
      this.state.currName &&
      this.state.currDescription &&
      this.state.currPosition
    ) {
      let thisModule = {
        companyName: this.state.currName,
        position: this.state.currPosition,
        datefrom: this.state.currFromDate,
        dateto: this.state.currToDate,
        description: this.state.currDescription,
        index: this.state.index,
      };
      this.setState({ index: this.state.index + 1, isAdding: false });
      this.setState({
        modules: this.state.modules.concat(thisModule),
        moduleJSON: JSON.stringify(thisModule),
      });
      this.setState({
        currName: null,
        currPosition: null,
        currFromDate: null,
        currToDate: null,
        currDescription: null,
      });
    }
    this.setState({ isAdding: false });

  }

  displayForm() {
    return (
      <>
        {this.state.isAdding ? (
          <div className="modular-form-section">
            <>
              <div className="row">
                <label htmlFor="company-name">
                  <span>Company name</span>
                  <input
                    type="text"
                    id="company-name"
                    onChange={this.handleChange}
                    required
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
                    required
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
                    required
                  ></input>
                </label>
              </div>

              <div className="row">
                <label htmlFor="date-from">
                  <span>Start Date:</span>
                  <input
                    type="date"
                    id="date-from"
                    onChange={this.handleChange}
                    required
                  ></input>
                </label>
                <label htmlFor="date-to">
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
          </div>
        ) : null}
      </>
    );
  }

  render() {
    return (
      <div className="expForm form-section">
        <h3 className="form-label">Work experience</h3>
        {this.state.modules.length > 0
          ? this.state.modules.map((item) => {
              //Storing original value in hidden input using state.
              return (
                <div className="module-container" key={item.index}>
                  <input
                    type="hidden"
                    value={JSON.stringify(item)} //NEEDS TO BE CHANGED BY EDITFORM
                    name={"workmodule" + item.index}
                    key={"workmodule" + item.index}
                  ></input>

                  <div
                    className="work-module"
                    id={"work-div" + item.index}
                    key={"work-div" + item.index}
                  >
                    <p key={item.index + "companyName"}>
                      <span className="module-label">Company:</span>
                      {item.companyName}
                    </p>
                    <p key={item.index + "position"}>
                      <span className="module-label">Position:</span>
                      {item.position}
                    </p>
                    <p key={item.index + "description"}>
                      <span className="module-label">Description</span>
                      {item.description.slice(0, 15) + "..."}
                    </p>
                    <p key={item.index + "datefrom"}>
                      <span className="module-label">Start:</span>
                      {item.datefrom}
                    </p>
                    <p key={item.index + "dateto"}>
                      <span className="module-label">End:</span>
                      {item.dateto}
                    </p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        modules: this.state.modules.filter(
                          (currItem) => currItem !== item
                        ),
                      });
                    }}
                  >
                    REMOVE
                  </button>
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
