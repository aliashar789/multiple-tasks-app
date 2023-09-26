import React, { useState } from 'react';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  console.log("🚀 ~ data:", data)

  const handleInputChange = (event, key) => {
    const value = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [key]: [...(prevData[key] || []), value],
    }));
  };

  const handleDeleteItem = (key, index) => {
    setData((prevData) => {
      const updatedItems = [...(prevData[key] || [])];
      updatedItems.splice(index, 1);
      return { ...prevData, [key]: updatedItems };
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleAddItem = (event, key) => {
    const value = event.target.parentNode.querySelector('input').value;
    if (value) {
      handleInputChange({ target: { value } }, key);
      event.target.parentNode.querySelector('input').value = '';
    }
  };

  const handleRestart = () => {
    setStep(1);
    setData({});
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Favorite Sports</h2>
          <input type="text" id="sportInput" />
          <button onClick={(event) => handleAddItem(event, 'sports')}>
            Add Sport
          </button>
          <ul>
            {(data.sports || []).map((sport, index) => (
              <li key={index}>
                {sport}
                <button onClick={() => handleDeleteItem('sports', index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Favorite Players</h2>
          <input type="text" id="playerInput" />
          <button onClick={(event) => handleAddItem(event, 'players')}>
            Add Player
          </button>
          <ul>
            {(data.players || []).map((player, index) => (
              <li key={index}>
                {player}
                <button onClick={() => handleDeleteItem('players', index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Favorite Channels</h2>
          <input type="text" id="channelInput" />
          <button onClick={(event) => handleAddItem(event, 'channels')}>
            Add Channel
          </button>
          <ul>
            {(data.channels || []).map((channel, index) => (
              <li key={index}>
                {channel}
                <button onClick={() => handleDeleteItem('channels', index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Step 4: Summary</h2>
          <p>Favorite Sports: {data.sports && data.sports.join(', ')}</p>
          <p>Favorite Players: {data.players && data.players.join(', ')}</p>
          <p>Favorite Channels: {data.channels && data.channels.join(', ')}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Survey;
