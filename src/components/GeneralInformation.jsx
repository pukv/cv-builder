export default function GeneralInformation() {
  return (
    <div>
      <form>
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" placeholder="John Doe" id="full-name" />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="johndoe@example.com" id="email" />
        <label htmlFor="phone">Phone Number:</label>
        <input type="phone" placeholder="+1 234 567 90" id="phone" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
