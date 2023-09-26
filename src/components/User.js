import React, { useState } from 'react';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  console.log("🚀 ~ data:", data)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setStep((prevStep) => prevStep + 1);
    console.log('Submitted data:', data);
  };

  
  return (
    <div>
      <h1>Sign Up</h1>
      {step === 1 && (
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name || ''}
            onChange={handleInputChange}
          />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email || ''}
            onChange={handleInputChange}
          />
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={data.number || ''}
            onChange={handleInputChange}
          />
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Summary:</h2>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Number: {data.number}</p>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
