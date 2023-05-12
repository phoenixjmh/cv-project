import { useState } from "react";

const Education = () => {
  const [eduModules, setEdu] = useState(0);
  const [currName, setName] = useState(null);
  const [currStudy, setStudy] = useState(null);
  const [currStudyDate, setStudyDate] = useState(null);
  const [index, setIndex] = useState(0);
  const [modules, setModules] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (e, idx) => {
    if (e.target.id === "school-name") setName(e.target.value);
    if (e.target.id === "area-of-study") setStudy(e.target.value);
    if (e.target.id === "date-of-study") setStudyDate(e.target.value);
  };

  const appendModule = (e) => {
    console.log("hook-style");
    e.preventDefault();
    if (currName && currStudy && currStudyDate) {
      setIndex(index + 1);
      setIsAdding(false);
      setModules(
        modules.concat({
          schoolName: currName,
          study: currStudy,
          dateStudied: currStudyDate,
          index: index,
        })
      );
      setName(null);
      setStudy(null);
      setStudyDate(null);
    }
    setIsAdding(false);
  };

  const displayForm = (idx) => {
    return (
      <>
        {isAdding ? (
          <div className="modular-form-section">
            <div className="row">
              <label htmlFor="school-name">
                <span>School Name</span>
                <input
                  type="text"
                  id="school-name"
                  onChange={(event) => handleChange(event, idx)}
                  required
                ></input>
              </label>
            </div>

            <div className="row">
              <label htmlFor="area-of-study">
                <span>Area of study</span>
                <input
                  type="text"
                  id="area-of-study"
                  onChange={(event) => handleChange(event, idx)}
                  required
                ></input>
              </label>
            </div>

            <div className="row">
              <label htmlFor="date-of-study">
                <span>Date studied</span>
                <input
                  type="date"
                  id="date-of-study"
                  onChange={(event) => handleChange(event, idx)}
                  required
                ></input>
              </label>
            </div>

            <button id="append-education-experience" onClick={appendModule}>
              Save
            </button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="eduForm form-section">
      <h3 className="form-label">Education</h3>
      {modules.length > 0
        ? modules.map((item) => {
            return (
              <div className="module-container" key={item.index}>
                <input
                  type="hidden"
                  value={JSON.stringify(item)}
                  name={"educationmodule" + item.index}
                  key={"education-module" + item.index}
                  readOnly
                ></input>
                <div
                  className="edu-module"
                  id={"edu-div" + item.index}
                  key={"edu-div" + item.ifndex}
                >
                  <p key={item.index + "school-name"}>
                    <span className="module-label">School:</span>{" "}
                    {item.schoolName}
                  </p>
                  <p key={"study" + item.index}>
                    <span className="module-label">Area of Study</span>{" "}
                    {item.study}
                  </p>
                  <p key={"date" + item.index}>
                    <span className="module-label">Date</span>{" "}
                    {item.dateStudied}
                  </p>
                </div>
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setModules(
                      modules.filter((currItem) => currItem !== item)
                    );
                  }}
                >
                  REMOVE
                </button>
              </div>
            );
          })
        : null}
      {eduModules > 0 ? displayForm(eduModules) :null}
      <>
        {!isAdding ? (
            <button
              id="add-school"
              onClick={(e) => {
                e.preventDefault();
                setEdu(eduModules + 1);
                setIsAdding(true);
              }}
            >
              {" "}
              + Add
            </button>
        ) : null}
      </>
    </div>
  );
};

export default Education;
