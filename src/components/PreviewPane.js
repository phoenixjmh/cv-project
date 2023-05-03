import React, { Component } from "react";
class PreviewPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cv = this.props.cv;
    return (
      <>
        <Header obj={cv} callback={this.props.callback} />
        <Main obj={cv} />
      </>
    );
  }
}

const Header = (props) => {
  const cv = props.obj;
  return (
    <>
      <button onClick={props.callback}>Edit</button>
      <header>
        <h2>{cv.name}</h2>
        <aside>{cv.email}</aside>
        <aside>{cv.phone}</aside>
      </header>
    </>
  );
};

const Main = (props) => {
  const cv = props.obj;
  return (
    <main>
      <WorkExperience obj={cv} />
      <EducationExperience obj={cv} />
    </main>
  );
};

const WorkExperience = (props) => {
  const cv = props.obj;
  let workModules = parseModules(cv, "workmodule");
  console.log(workModules);

  return (
    <section id='work-experience'>
      {workModules.map(item => {
        return (
          <div key={'work-module' + item.index}
            className='work-module'>
            <p key={item.index + item.datefrom}
              className='work-dates'>{item.datefrom + ' to ' + item.dateto}</p>
            <p key={item.position + item.index}
              className="work-position">{item.position}</p>
            <p key={item.companyName + item.index}
              className="work-name">{item.companyName}</p>

          </div>
        )
      })}
    </section>
  );
};

const EducationExperience = (props) => {
  const cv = props.obj;
  let eduModules = parseModules(cv, "educationmodule");

  console.log(eduModules);
  return (
    <section id='education-history'>
      {eduModules.map(item => {
        return (
          <div key={'edu-module' + item.index}
            className='edu-module'>
            <p key={item.index + item.dateStudied}
              className='edu-dates'>{item.dateStudied}</p>
            <p key={item.study + item.index}
              className="edu-position">{item.study}</p>
            <p key={item.schoolName + item.index}
              className="edu-name">{item.schoolName}</p>

          </div>)
      })}
    </section>
  );
};

function parseModules(object, string) {
  const objArray = Object.entries(object);
  let modules = [];
  objArray.forEach((item) => {
    if (item[0].includes(string)) modules.push(JSON.parse(item[1]));
  });

  return modules;
}
export default PreviewPane;

