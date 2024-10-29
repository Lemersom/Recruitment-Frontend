
const PersonalInformationForm = ({ personalInfo, setPersonalInfo }) => {
  return (
    <fieldset>
      <legend>Personal Information</legend>
      <input
        type="text"
        placeholder="First Name"
        value={personalInfo.first_name}
        onChange={(e) => setPersonalInfo({ ...personalInfo, first_name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={personalInfo.last_name}
        onChange={(e) => setPersonalInfo({ ...personalInfo, last_name: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={personalInfo.date_of_birth}
        onChange={(e) => setPersonalInfo({ ...personalInfo, date_of_birth: e.target.value })}
        required
      />
    </fieldset>
  );
};

export default PersonalInformationForm;
