import {useState} from "react";

const Experience=()=>{
 

   const [expModules,setExpModules] = useState(0);
   const [currName,setName]= useState(null);
   const [currPosition,setPosition]=useState(null);
   const [currFromDate,setFrom] = useState(null);
   const [currToDate,setTo] = useState(null);
   const [currDescription,setDescription] =useState(null);
   const [index,setIndex] = useState(0);
   const [modules,setModules] = useState([]);
   const [isAdding,setIsAdding] = useState(false);
   
  
 const  handleChange= (e, idx) => {
    if (e.target.id === "company-name")
      setName(e.target.value);

    if (e.target.id === "position")
      setPosition(e.target.value);

    if (e.target.id === "date-from")
      setFrom( e.target.value );

    if (e.target.id === "date-to")
      setTo( e.target.value);

    if (e.target.id === "job-description")
      setDescription(e.target.value);
  }
 const appendModule=(e)=> {
  console.log('hookstyle');
    e.preventDefault();
    if (currName &&currDescription &&currPosition) {
      let newModule = {
        companyName:currName,
        position:currPosition,
        datefrom:currFromDate,
        dateto:currToDate,
        description:currDescription,
        index:index,
      };
      setIndex(index+1);
      setIsAdding(false);
      setModules(modules.concat(newModule))
      setName(null);
      setPosition(null);
      setFrom(null);
      setTo(null);
      setDescription(null);
    
    }
    setIsAdding(false);

  }

  const displayForm=()=> {
    return (
      <>
        {isAdding ? (
          <div className="modular-form-section">
            <>
              <div className="row">
                <label htmlFor="company-name">
                  <span>Company name</span>
                  <input
                    type="text"
                    id="company-name"
                    onChange={handleChange}
                    required
                  ></input>
                </label>
              </div>
              <div className="row">
                <label htmlFor="position">
                  <span>Position Title</span>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="position"
                    required
                  ></input>
                </label>
              </div>

              <div className="row">
                <label htmlFor="job-description">
                  <span>Job Description</span>
                  <input
                    type="textarea"
                    onChange={handleChange}
                    id="job-description"
                    required
                  ></input>
                </label>
              </div>

              <div className="row">
                <label htmlFor="date-from">
                  <span>Start Date:</span>
                  <input
                    type="date"
                    onChange={handleChange}
                    id="date-from"
                    required
                  ></input>
                </label>
                <label htmlFor="date-to">
                  <span>End Date:</span>
                  <input
                    type="date"
                    id="date-to"
                    onChange={handleChange}
                  ></input>
                </label>
              </div>

              <button id="append-work-experience" onClick={appendModule}>
                Save
              </button>
            </>
          </div>
        ) : null}
      </>
    );
  }

 
    return (
      <div className="expForm form-section">
        <h3 className="form-label">Work experience</h3>
        {modules.length > 0
          ? modules.map((item) => {
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
                     
                      setModules(modules.filter((currItem) => currItem !== item));

                    }}
                  >
                    REMOVE
                  </button>
                </div>
              );
            })
          : null}
        {expModules > 0 ? (
          displayForm(expModules)
        ) :null}
        <>
          {!isAdding ? (
              <button
                id="add-exp"
                onClick={(e) => {
                  e.preventDefault();
                  setExpModules(expModules+1);
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
  }


export default Experience;
