import { useState } from "react";
import Title from "./Title.jsx";
import GeneralInformation from "./GeneralInformation.jsx";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);
  return (
    <div>
      <Title />
      <GeneralInformation />
    </div>
  );
}
