import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewPane from "./components/PreviewPane";
import "./styles/App.scss";
import "./styles/PreviewPanel.scss";

const App = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [cvApp, setCVApp] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    if (handleErrors(form)) {
      let formData = new FormData(form);

      let dataJSON = Object.fromEntries(formData);

      setCVApp(dataJSON);
      setIsPreview(true);
    
    } else {
      return;
    }
  };

  const handleErrors = (form) => {
    const expForm = form.childNodes[1].childNodes[1];
    const eduForm = form.childNodes[2].childNodes[1];
    if (expForm.className === "modular-form-section") {
      alert("Please Save Work Experience Module");
      return false;
    }
    if (eduForm.className === "modular-form-section") {
      alert("Please Save Education Module");
      return false;
    }

    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <EditPane />
        <button type="submit" onClick={() => handleSubmit}>
          Preview
        </button>
      </form>
      {isPreview ? (
        <PreviewPane
          cv={cvApp} //UNCOMMENT FOR BUILD
          callback={() => setIsPreview(false)}
        />
      ) : null}
    </>
  );
};

const EditPane = () => {
  return (
    <>
      <PersonalInfo />
      <Experience />
      <Education />
    </>
  );
};

export default App;
