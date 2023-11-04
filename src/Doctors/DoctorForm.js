import React, { useState } from 'react';

const DoctorForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    gender: '',
    age: '',
    specialization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your server or perform any other actions
    onAdd(formData);
    // Clear the form fields
    setFormData({
      name: '',
      salary: '',
      gender: '',
      age: '',
      specialization: '',
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
        <label htmlFor="salary">Enter Salary:</label>
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
        <label htmlFor="specialization">Enter Specialization:</label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default DoctorForm;
