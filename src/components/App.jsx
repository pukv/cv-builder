import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import GeneralInformation from "./components/GeneralInformation";
import EducationalInformation from "./components/EducationalInformation";
import WorkExperience from "./components/WorkExperience";
import PreviewGeneralInfo from "./components/PreviewGeneralInfo";
import PreviewEducationalInfo from "./components/PreviewEducationalInfo";
import PreviewWorkExp from "./components/PreviewWorkExp";

function App() {
  // State
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);

  // Handlers
  const handleAddGeneralInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGeneralInfo = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    setGeneralInfo(newGeneralInfo);
    e.target.reset();
  };

  const handleAddEducationalInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEducationalInfo = {
      schoolName: formData.get("schoolName"),
      educationLevel: formData.get("educationLevel"),
      schoolStartDate: formData.get("schoolStartDate"),
      schoolEndDate: formData.get("schoolEndDate"),
    };
    setEducationalInfo([...educationalInfo, newEducationalInfo]);
    e.target.reset();
  };

  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newWorkExp = {
      companyName: formData.get("companyName"),
      positionTitle: formData.get("positionTitle"),
      jobStartDate: formData.get("jobStartDate"),
      jobEndDate: formData.get("jobEndDate"),
    };
    setWorkExp([...workExp, newWorkExp]);
    e.target.reset();
  };

  // Delete handlers
  const deleteGeneralInfo = () => {
    setGeneralInfo({});
  };

  const deleteEducation = (index) => {
    setEducationalInfo(educationalInfo.filter((_, i) => i !== index));
  };

  const deleteWorkExp = (index) => {
    setWorkExp(workExp.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Title />
      <div className="app-container">
        <div className="forms">
          <GeneralInformation handleAddGeneralInfo={handleAddGeneralInfo} />
          <EducationalInformation
            handleAddEducationalInfo={handleAddEducationalInfo}
          />
          <WorkExperience handleAddWorkExperience={handleAddWorkExperience} />
        </div>

        <div className="preview">
          <PreviewGeneralInfo
            generalInfo={generalInfo}
            isEditing={isEditingGeneral}
            onToggleEdit={() => setIsEditingGeneral(!isEditingGeneral)}
            onDelete={deleteGeneralInfo}
          />
          <PreviewEducationalInfo
            educationalInfo={educationalInfo}
            isEditing={isEditingEdu}
            onToggleEdit={() => setIsEditingEdu(!isEditingEdu)}
            onDelete={deleteEducation}
          />
          <PreviewWorkExp
            workExp={workExp}
            isEditing={isEditingWork}
            onToggleEdit={() => setIsEditingWork(!isEditingWork)}
            onDelete={deleteWorkExp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
