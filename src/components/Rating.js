import React, { useState } from 'react';

const Rating = (props) => {
    const {form, setForm} = props;
const [ratings, setRatings] = useState({})
  const handleRatingChange = (e, key) => {
    const { value } = e.target;
    setRatings((prevForm) => ({
        ...prevForm,
          [key]: value
      }));

      const updatedForm = { ...form };
      updatedForm.ratings = updatedForm.ratings || {}; 
      updatedForm.ratings[key] = value;
      setForm(updatedForm);
  };

  const options = [
    { key: 'sports', label: 'Sports' },
    { key: 'players', label: 'Players' },
    { key: 'music', label: 'Music' },
    { key: 'science', label: 'Science' },
    { key: 'health', label: 'Health' },
  ];

  return (
    <>
    <h1 className='text-center my-5'>Rating Your Intrests</h1>
      {options.map((option) => (
        <div className='d-flex align-items-center justify-content-around' key={option.key}>
          <h4>{option.label}</h4>
          <div>
            {[0, 1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  value={rating}
                  checked={ratings[option.key] === String(rating)}
                  onChange={(e) => handleRatingChange(e, option.key)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Rating;
