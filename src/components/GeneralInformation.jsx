export default function GeneralInformation({ handleAddGeneralInfo }) {
  return (
    <form onSubmit={handleAddGeneralInfo} className="form-section">
      <h3>Personal Information</h3>
      <label htmlFor="full-name">Full Name:</label>
      <input
        type="text"
        name="fullName"
        placeholder="John Smith"
        id="full-name"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="john.smith@email.com"
        id="email"
        required
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        name="phone"
        placeholder="+1 234 567 8900"
        id="phone"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
