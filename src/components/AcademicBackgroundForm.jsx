
const AcademicBackgroundForm = ({ education, setEducation }) => {
  return (
    <fieldset>
      <legend>Academic Background</legend>
      <input
        type="text"
        placeholder="Institution"
        value={education.institution}
        onChange={(e) => setEducation({ ...education, institution: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Degree"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Start Date"
        value={education.start_date}
        onChange={(e) => setEducation({ ...education, start_date: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="End Date"
        value={education.endDate}
        onChange={(e) => setEducation({ ...education, end_date: e.target.value })}
      />
    </fieldset>
  );
};

export default AcademicBackgroundForm;
