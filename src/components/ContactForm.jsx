
const ContactForm = ({ contact, setContact }) => {
  return (
    <fieldset>
      <legend>Contact</legend>
      <input
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={contact.phone_number}
        onChange={(e) => setContact({ ...contact, phone_number: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Country"
        value={contact.country}
        onChange={(e) => setContact({ ...contact, country: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="State"
        value={contact.state}
        onChange={(e) => setContact({ ...contact, state: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={contact.city}
        onChange={(e) => setContact({ ...contact, city: e.target.value })}
        required
      />
    </fieldset>
  );
};

export default ContactForm;
