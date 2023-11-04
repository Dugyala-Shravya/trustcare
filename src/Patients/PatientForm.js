import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    gender: '',
    age: '',
    specialization: '',
    doctor: '',
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('https://hospital-7w52.onrender.com/doctors')
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doctor data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new patient object with the form data
    const newPatient = {
      name: formData.name,
      salary: formData.salary,
      gender: formData.gender,
      age: formData.age,
      specialization: formData.specialization,
      doctor: formData.doctor,
    };

    // Send a POST request to the JSON server to add the new patient
    axios.post('https://hospital-7w52.onrender.com/patients', newPatient)
      .then((response) => {
        // Call the onAdd callback to update the patient list in the parent component
        onAdd(response.data);

        // Clear the form fields
        setFormData({
          name: '',
          salary: '',
          gender: '',
          age: '',
          specialization: '',
          doctor: '',
        });
      })
      .catch((error) => {
        console.error('Error adding patient data:', error);
      });
  };
  return (
    <form class="container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="salary">Enter Weight:</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Enter Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Enter Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="specialization">Enter Disease:</label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="doctor">Select Doctor:</label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
        >
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default PatientForm;

