
const ProfessionalExperienceForm = ({ experience, setExperience }) => {
  return (
    <fieldset>
      <legend>Professional Experience</legend>
      <input
        type="text"
        placeholder="Job Title"
        value={experience.job_title}
        onChange={(e) => setExperience({ ...experience, job_title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Company"
        value={experience.company}
        onChange={(e) => setExperience({ ...experience, company: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Start Date"
        value={experience.start_date}
        onChange={(e) => setExperience({ ...experience, start_date: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="End Date"
        value={experience.end_date}
        onChange={(e) => setExperience({ ...experience, end_date: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={experience.description}
        onChange={(e) => setExperience({ ...experience, description: e.target.value })}
      />
    </fieldset>
  );
};

export default ProfessionalExperienceForm;
