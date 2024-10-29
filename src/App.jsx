import { useState } from 'react';
import './App.css'
import PersonalInformationForm from './components/PersonalInformationForm.jsx';
import ContactForm from './components/ContactForm.jsx';
import ProfessionalExperienceForm from './components/ProfessionalExperienceForm.jsx';
import AcademicBackgroundForm from './components/AcademicBackgroundForm.jsx';

import axios from 'axios'

const API_HOST = import.meta.env.API_HOST || 'localhost'
const API_PORT = import.meta.env.API_PORT || '8000'

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: ''
  });

  const [contact, setContact] = useState({
    email: '',
    phone_number: '',
    country: '',
    state: '',
    city: ''
  });

  const [experience, setExperience] = useState({
    job_title: '',
    company: '',
    start_date: '',
    end_date: '',
    description: ''
  });

  const [education, setEducation] = useState({
    institution: '',
    degree: '',
    start_date: '',
    end_date: ''
  });

  const cleanInputs = () => {
    setPersonalInfo({ first_name: '', last_name: '', date_of_birth: '' });
    setContact({ email: '', phone_number: '', country: '', state: '', city: '' });
    setExperience({ job_title: '', company: '', start_date: '', end_date: '', description: '' });
    setEducation({ institution: '', degree: '', start_date: '', end_date: '' });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      personal_information: personalInfo,
      contact: contact,
      professional_experience: {
        ...experience,
        end_date: experience.end_date || null,
      },
      academic_background: {
        ...education,
        end_date: education.end_date || null,
      },
    };
    
    try {
      const response = await axios.post(`http://${API_HOST}:${API_PORT}/api/profile/`, payload);
      console.log('Profile created successfully:', response.data);
      alert('Profile created successfully!');
      cleanInputs()
    } catch (error) {
      console.error('Error creating profile:', error.response?.data || error.message);
      alert('An error occurred while creating the profile.');
    }
  };

  return (
    <div className="app-container">
      <h1>Recruitment System</h1>
      <form onSubmit={handleSubmit}>
        <PersonalInformationForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <ContactForm contact={contact} setContact={setContact} />
        <ProfessionalExperienceForm experience={experience} setExperience={setExperience} />
        <AcademicBackgroundForm education={education} setEducation={setEducation} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
