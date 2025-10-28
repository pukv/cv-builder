export default function GeneralInformation({
  generalForm,
  setGeneralForm,
  handleAddGeneralInfo,
  isEditing,
}) {
  return (
    <form onSubmit={handleAddGeneralInfo} className="form-section">
      <h3>Personal Information</h3>
      <label htmlFor="full-name">Full Name:</label>
      <input
        type="text"
        placeholder="John Smith"
        id="full-name"
        value={generalForm.fullName || ""}
        onChange={(e) =>
          setGeneralForm({ ...generalForm, fullName: e.target.value })
        }
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="john.smith@email.com"
        id="email"
        value={generalForm.email || ""}
        onChange={(e) =>
          setGeneralForm({ ...generalForm, email: e.target.value })
        }
        required
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        placeholder="+1 234 567 8900"
        id="phone"
        value={generalForm.phone || ""}
        onChange={(e) =>
          setGeneralForm({ ...generalForm, phone: e.target.value })
        }
        required
      />
      <button type="submit">{isEditing ? "Save" : "Add"}</button>
    </form>
  );
}
