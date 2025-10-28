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
  // Display state
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  // Edit states
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);

  // Track which item we're editing
  const [editingEduIndex, setEditingEduIndex] = useState(null);
  const [editingWorkIndex, setEditingWorkIndex] = useState(null);

  // Form states
  const [generalForm, setGeneralForm] = useState({});
  const [eduForm, setEduForm] = useState({});
  const [workForm, setWorkForm] = useState({});

  // General Info Handlers
  const handleAddGeneralInfo = (e) => {
    e.preventDefault();
    setGeneralInfo(generalForm);
    setIsEditingGeneral(false);
    setGeneralForm({});
  };

  const toggleGeneralEdit = () => {
    if (!isEditingGeneral) {
      // Entering edit mode - populate form with current data
      setGeneralForm(generalInfo);
    } else {
      // Exiting edit mode - save data
      setGeneralInfo(generalForm);
    }
    setIsEditingGeneral(!isEditingGeneral);
  };

  // Education Handlers
  const handleAddEducationalInfo = (e) => {
    e.preventDefault();
    if (editingEduIndex !== null) {
      // Editing existing education
      const updatedEducation = [...educationalInfo];
      updatedEducation[editingEduIndex] = eduForm;
      setEducationalInfo(updatedEducation);
      setEditingEduIndex(null);
    } else {
      // Adding new education
      setEducationalInfo([...educationalInfo, eduForm]);
    }
    setEduForm({});
    setIsEditingEdu(false);
  };

  const toggleEduEdit = (index = null) => {
    if (index !== null && !isEditingEdu) {
      // Editing specific education entry
      setEduForm(educationalInfo[index]);
      setEditingEduIndex(index);
    } else {
      // Cancel editing or adding new
      setEduForm({});
      setEditingEduIndex(null);
    }
    setIsEditingEdu(!isEditingEdu);
  };

  // Work Experience Handlers
  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    if (editingWorkIndex !== null) {
      // Editing existing work
      const updatedWork = [...workExp];
      updatedWork[editingWorkIndex] = workForm;
      setWorkExp(updatedWork);
      setEditingWorkIndex(null);
    } else {
      // Adding new work
      setWorkExp([...workExp, workForm]);
    }
    setWorkForm({});
    setIsEditingWork(false);
  };

  const toggleWorkEdit = (index = null) => {
    if (index !== null && !isEditingWork) {
      // Editing specific work entry
      setWorkForm(workExp[index]);
      setEditingWorkIndex(index);
    } else {
      // Cancel editing or adding new
      setWorkForm({});
      setEditingWorkIndex(null);
    }
    setIsEditingWork(!isEditingWork);
  };

  // Delete handlers
  const deleteGeneralInfo = () => {
    setGeneralInfo({});
    setIsEditingGeneral(false);
  };

  const deleteEducation = (index) => {
    setEducationalInfo(educationalInfo.filter((_, i) => i !== index));
    if (editingEduIndex === index) {
      setEditingEduIndex(null);
      setIsEditingEdu(false);
    }
  };

  const deleteWorkExp = (index) => {
    setWorkExp(workExp.filter((_, i) => i !== index));
    if (editingWorkIndex === index) {
      setEditingWorkIndex(null);
      setIsEditingWork(false);
    }
  };

  return (
    <div className="App">
      <Title />
      <div className="app-container">
        <div className="forms">
          <GeneralInformation
            generalForm={generalForm}
            setGeneralForm={setGeneralForm}
            handleAddGeneralInfo={handleAddGeneralInfo}
            isEditing={isEditingGeneral}
          />
          <EducationalInformation
            eduForm={eduForm}
            setEduForm={setEduForm}
            handleAddEducationalInfo={handleAddEducationalInfo}
            isEditing={isEditingEdu}
            editingIndex={editingEduIndex}
          />
          <WorkExperience
            workForm={workForm}
            setWorkForm={setWorkForm}
            handleAddWorkExperience={handleAddWorkExperience}
            isEditing={isEditingWork}
            editingIndex={editingWorkIndex}
          />
        </div>

        <div className="preview">
          <PreviewGeneralInfo
            generalInfo={generalInfo}
            isEditing={isEditingGeneral}
            onToggleEdit={toggleGeneralEdit}
            onDelete={deleteGeneralInfo}
          />
          <PreviewEducationalInfo
            educationalInfo={educationalInfo}
            isEditing={isEditingEdu}
            onToggleEdit={toggleEduEdit}
            onDelete={deleteEducation}
          />
          <PreviewWorkExp
            workExp={workExp}
            isEditing={isEditingWork}
            onToggleEdit={toggleWorkEdit}
            onDelete={deleteWorkExp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
