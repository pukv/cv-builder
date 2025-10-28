import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import GeneralInformation from "./components/GeneralInformation";
import EducationalInformation from "./components/EducationalInformation";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);

  const handleAddGeneralInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGeneralInfo = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    setGeneralInfo(newGeneralInfo);
    console.log("General info added:", newGeneralInfo);
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
    console.log("Education added:", newEducationalInfo);
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
    console.log("Work experience added:", newWorkExp);
    e.target.reset();
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
      </div>
    </div>
  );
}
