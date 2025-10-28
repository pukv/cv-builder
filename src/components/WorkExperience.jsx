export default function WorkExperience({ handleAddWorkExperience }) {
  return (
    <form onSubmit={handleAddWorkExperience} className="form-section">
      <h3>Work Experience</h3>
      <label htmlFor="companyName">Company Name:</label>
      <input
        name="companyName"
        type="text"
        id="companyName"
        placeholder="Company Name"
        required
      />
      <label htmlFor="positionTitle">Position Title:</label>
      <input
        name="positionTitle"
        type="text"
        id="positionTitle"
        placeholder="Job Title"
        required
      />
      <label htmlFor="jobStartDate">Start Date</label>
      <input type="date" name="jobStartDate" id="jobStartDate" required />
      <label htmlFor="jobEndDate">End Date</label>
      <input type="date" name="jobEndDate" id="jobEndDate" required />
      <button type="submit">Add Work Experience</button>
    </form>
  );
}
