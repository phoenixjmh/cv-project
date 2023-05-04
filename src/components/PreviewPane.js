import React, { Component } from "react";
class PreviewPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cv = this.props.cv;
    console.log(cv);
    return (
      <div className='preview-page'>
<button onClick={this.props.callback}>Edit</button>
<div className='preview-panel'>

        <Header obj={cv} callback={this.props.callback} />
        <Main obj={cv} />
</div>
      </div>
    );
  }
}

const Header = (props) => {
  const cv = props.obj;
  return (
    <>
      <header>
        <h2>{cv.name}</h2>
        <div className="contact-info">
          <span>Contact Info</span>
        <aside>{cv.email}</aside>
        <aside>{cv.phone}</aside>
        </div>
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
      <span className='cv-section-label'>Work Experience</span>
      {workModules.map(item => {
        return (
          <div key={'work-module' + item.index}
            className='work-module'>
            <p key={item.position + item.index}
              className="work-position">{capitalizeTitle(item.position)}</p>
            <p key={item.companyName + item.index}
              className="work-name">{capitalizeTitle(item.companyName)}</p>
            <p key={item.index + item.datefrom}
              className='work-dates'>{item.datefrom + ' to ' + item.dateto}</p>
            <p key={item.description + item.index}
              className="work-description">{item.description}</p>

          </div>
        )
      })}
    </section>
  );
};

const EducationExperience = (props) => {
  const cv = props.obj;
  let eduModules = parseModules(cv, "educationmodule");

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

function capitalizeTitle(string){
  let capitalized=string.replace(string[0],string[0].toUpperCase())
  for(let i=0;i<capitalized.length;i++){
      if(capitalized[i]===' '&& i<capitalized.length-1){
          capitalized=capitalized.replace((capitalized[i]+capitalized[i+1]),(capitalized[i]+capitalized[i+1]).toUpperCase())
      }   
  }
  return capitalized;
}
export default PreviewPane;

