import React, { useState, useEffect } from 'react';
import Rating from './Rating';

const UserProfile = () => {
  const [form, setForm] = useState({});
  const [progress, setProgress] = useState(0);
  console.log("🚀 ~ form:", form)

  useEffect(() => {
    const calculateProgress = () => {
      const filledFields = Object.values(form).filter(value => value !== '').length;
      const totalFields = 6;
      const newProgress = (filledFields / totalFields) * 100;
      setProgress(newProgress);
    };

    calculateProgress();
  }, [form]);

  const handleChange = (e, key) => {
    const { value, files } = e.target;
  
    if (files && files.length > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: URL.createObjectURL(files[0]),
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: value,
      }));
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div className="progress-container my-3">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div>
        {form.profileImage ? (
          <div>
            <img
              src={form.profileImage}
              alt="Profile"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <input
              type="file"
              id="profileImage"
              onChange={(e) => handleChange(e, 'profileImage')}
            />
          </div>
        ) : (
          <div>
            <label htmlFor="profileImage">Upload Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              onChange={(e) => handleChange(e, 'profileImage')}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={form.email || ''}
          onChange={(e) => handleChange(e, 'email')}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={form.gender || ''}
          onChange={(e) => handleChange(e, 'gender')}
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {form.gender === 'other' && (
        <div>
          <label htmlFor="otherGender">Other Gender:</label>
          <input
            type="text"
            id="otherGender"
            value={form.otherGender}
            onChange={(e) => handleChange(e, 'otherGender')}
            required
          />
        </div>
      )}
      </div>
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          value={form.birthday || ''}
          onChange={(e) => handleChange(e, 'birthday')}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={form.location || ''}
          onChange={(e) => handleChange(e, 'location')}
          required
        />
      </div>
      <>
        <Rating form={form} setForm={setForm}/>
      </>
    </div>
  );
};

export default UserProfile;
