import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.appendModule = this.appendModule.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      eduModules: 0,
      currName: null,
      currStudy: null,
      currStudyDate: null,
      index: 0,
      modules: [],
      isAdding: false,
    };
  }

  handleChange(e, idx) {
    if (e.target.id === "school-name")
      this.setState({ currName: e.target.value });

    if (e.target.id === "area-of-study")
      this.setState({ currStudy: e.target.value });

    if (e.target.id === "date-of-study")
      this.setState({ currStudyDate: e.target.value });

    // console.log(this.state);
  }

  appendModule(e) {
    e.preventDefault();

    this.setState({ index: this.state.index + 1, isAdding: false });
    this.setState({
      modules: this.state.modules.concat({
        schoolName: this.state.currName,
        study: this.state.currStudy,
        dateStudied: this.state.currStudyDate,
        index: this.state.index,
      }),
    });
    this.setState({
      currName: null,
      currStudy: null,
      currStudyDate: null,
    });
    console.log(this.state.index);
  }

  displayForm(idx) {
    return (
      <div className="modular-form-section">
        {this.state.isAdding ? (
          <>
            <div className="row">
              <label htmlFor="school-name">
                <span>School Name</span>
                <input
                  type="text"
                  id="school-name"
                  onChange={(event) => this.handleChange(event, idx)}
                ></input>
              </label>
            </div>
            <div className="row">
              <label htmlFor="area-of-study">
                <span>Area of study</span>
                <input
                  type="text"
                  id="area-of-study"
                  onChange={(event) => this.handleChange(event, idx)}
                ></input>
              </label>
            </div>

            <div className="row">
              <label htmlFor="date-of-study">
                <span>Date studied</span>
                <input
                  type="date"
                  id="date-of-study"
                  onChange={(event) => this.handleChange(event, idx)}
                ></input>
              </label>
            </div>

            <button
              id="append-education-experience"
              onClick={this.appendModule}
            >
              Save
            </button>
          </>
        ) : null}
      </div>
    );
  }
  render() {
    return (
      <div className="eduForm form-section">
        <h3 className='form-label'>Education</h3>
        {this.state.modules.length > 0
          ? this.state.modules.map((item) => {
              return (
                <div key={item.index}>
                  <input
                    type="hidden"
                    value={JSON.stringify(item)}
                    name={"educationmodule" + item.index}
                    key={"education-module" + item.index}
                    readOnly
                  ></input>
                  <div
                    className="education-module"
                    id={"edu-div" + item.index}
                    key={"edu-div" + item.index}
                  >
                    <p key={item.index + "school-name"}>{item.schoolName}</p>
                    <p key={"study" + item.index}>{item.study}</p>
                    <p key={"date" + item.index}>{item.studyDate}</p>
                  </div>
                </div>
              );
            })
          : null}
        {this.state.eduModules > 0 ? (
          this.displayForm(this.state.eduModules)
        ) : (
          <></>
        )}
        <>
          {!this.state.isAdding ? (
            <>
              <button
                id="add-school"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    eduModules: this.state.eduModules + 1,
                    idx: 0,
                    isAdding: true,
                  });
                  console.log(this.state.eduModules);
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
export default Education;
