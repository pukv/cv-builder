export default function EducationalInformation({ handleAddEducationalInfo }) {
  return (
    <form onSubmit={handleAddEducationalInfo} className="form-section">
      <h3>Education</h3>
      <label htmlFor="schoolName">School Name:</label>
      <input
        name="schoolName"
        type="text"
        id="schoolName"
        placeholder="University Name"
        required
      />
      <label htmlFor="educationLevel">Education Level:</label>
      <select name="educationLevel" id="educationLevel" required>
        <option value="">Select Education Level</option>
        <option value="High School">High School</option>
        <option value="Associate Degree">Associate Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Certificate">Certificate</option>
      </select>
      <label htmlFor="schoolStartDate">Start Date</label>
      <input type="date" name="schoolStartDate" id="schoolStartDate" required />
      <label htmlFor="schoolEndDate">End Date</label>
      <input type="date" name="schoolEndDate" id="schoolEndDate" required />
      <button type="submit">Add Education</button>
    </form>
  );
}
