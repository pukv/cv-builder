export default function WorkExperience({
  workForm,
  setWorkForm,
  handleAddWorkExperience,
  isEditing,
  editingIndex,
}) {
  return (
    <form onSubmit={handleAddWorkExperience} className="form-section">
      <h3>Work Experience</h3>
      <label htmlFor="companyName">Company Name:</label>
      <input
        name="companyName"
        type="text"
        id="companyName"
        placeholder="Company Name"
        value={workForm.companyName || ""}
        onChange={(e) =>
          setWorkForm({ ...workForm, companyName: e.target.value })
        }
        required
      />
      <label htmlFor="positionTitle">Position Title:</label>
      <input
        name="positionTitle"
        type="text"
        id="positionTitle"
        placeholder="Job Title"
        value={workForm.positionTitle || ""}
        onChange={(e) =>
          setWorkForm({ ...workForm, positionTitle: e.target.value })
        }
        required
      />
      <label htmlFor="jobStartDate">Start Date</label>
      <input
        type="date"
        name="jobStartDate"
        id="jobStartDate"
        value={workForm.jobStartDate || ""}
        onChange={(e) =>
          setWorkForm({ ...workForm, jobStartDate: e.target.value })
        }
        required
      />
      <label htmlFor="jobEndDate">End Date</label>
      <input
        type="date"
        name="jobEndDate"
        id="jobEndDate"
        value={workForm.jobEndDate || ""}
        onChange={(e) =>
          setWorkForm({ ...workForm, jobEndDate: e.target.value })
        }
        required
      />
      <button type="submit">
        {editingIndex !== null ? "Save Work Experience" : "Add Work Experience"}
      </button>
      {isEditing && editingIndex !== null && (
        <button type="button" onClick={() => setWorkForm({})}>
          Cancel
        </button>
      )}
    </form>
  );
}
