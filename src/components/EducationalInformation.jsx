export default function EducationalInformation({
  eduForm,
  setEduForm,
  handleAddEducationalInfo,
  isEditing,
  editingIndex,
}) {
  return (
    <form onSubmit={handleAddEducationalInfo} className="form-section">
      <h3>Education</h3>
      <label htmlFor="schoolName">School Name:</label>
      <input
        name="schoolName"
        type="text"
        id="schoolName"
        placeholder="University Name"
        value={eduForm.schoolName || ""}
        onChange={(e) => setEduForm({ ...eduForm, schoolName: e.target.value })}
        required
      />
      <label htmlFor="educationLevel">Education Level:</label>
      <select
        name="educationLevel"
        id="educationLevel"
        value={eduForm.educationLevel || ""}
        onChange={(e) =>
          setEduForm({ ...eduForm, educationLevel: e.target.value })
        }
        required
      >
        <option value="">Select Education Level</option>
        <option value="High School">High School</option>
        <option value="Associate Degree">Associate Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Certificate">Certificate</option>
      </select>
      <label htmlFor="schoolStartDate">Start Date</label>
      <input
        type="date"
        name="schoolStartDate"
        id="schoolStartDate"
        value={eduForm.schoolStartDate || ""}
        onChange={(e) =>
          setEduForm({ ...eduForm, schoolStartDate: e.target.value })
        }
        required
      />
      <label htmlFor="schoolEndDate">End Date</label>
      <input
        type="date"
        name="schoolEndDate"
        id="schoolEndDate"
        value={eduForm.schoolEndDate || ""}
        onChange={(e) =>
          setEduForm({ ...eduForm, schoolEndDate: e.target.value })
        }
        required
      />
      <button type="submit">
        {editingIndex !== null ? "Save Education" : "Add Education"}
      </button>
      {isEditing && editingIndex !== null && (
        <button type="button" onClick={() => setEduForm({})}>
          Cancel
        </button>
      )}
    </form>
  );
}
