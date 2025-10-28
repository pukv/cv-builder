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

  // Download functionality
  const downloadPreview = () => {
    // Create a clone of the preview content
    const previewContent = document
      .querySelector(".preview-content")
      .cloneNode(true);

    // Remove all buttons from the clone
    const buttons = previewContent.querySelectorAll(".preview-buttons");
    buttons.forEach((button) => button.remove());

    const blob = new Blob(
      [
        `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Professional CV</title>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              margin: 40px; 
              background: #ffffff;
              color: #333;
              line-height: 1.6;
            }
            .preview-content { 
              max-width: 800px;
              margin: 0 auto;
            }
            .section-title { 
              color: #2c3e50; 
              border-bottom: 2px solid #3498db; 
              padding-bottom: 0.5rem; 
              margin-bottom: 1rem; 
              font-size: 1.5rem;
            }
            .preview-header { 
              display: flex; 
              justify-content: space-between; 
              margin-bottom: 0.5rem; 
            }
            .position-title { 
              font-weight: 600; 
              color: #2c3e50; 
              font-size: 1.1rem;
            }
            .date-range { 
              color: #7f8c8d; 
              font-size: 0.9rem;
            }
            .school-name, .company-name { 
              font-size: 1.3rem; 
              color: #2c3e50; 
              margin-bottom: 0.5rem; 
              font-weight: 600; 
            }
            h4 { color: #2c3e50; margin-bottom: 0.5rem; }
            p { color: #666; margin: 0.25rem 0; }
            .cv-section { 
              margin-bottom: 2rem; 
              padding-bottom: 1rem; 
              border-bottom: 1px solid #eee; 
            }
            .education-item, .work-item { 
              margin-bottom: 1.5rem; 
              padding: 1rem; 
              background: #f8f9fa; 
              border-radius: 6px; 
              border-left: 4px solid #3498db; 
            }
          </style>
        </head>
        <body>
          <div class="preview-content">${previewContent.innerHTML}</div>
        </body>
      </html>
    `,
      ],
      { type: "text/html" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "professional-cv.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          <div className="download-section">
            <h3>CV Preview</h3>
            <p>
              Review your CV below. When ready, download it as an HTML file.
            </p>
            <button onClick={downloadPreview} className="download-btn">
              📄 Download CV
            </button>
          </div>
          <div className="preview-content">
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
    </div>
  );
}

export default App;
