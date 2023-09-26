import React, { useState, useRef, createContext } from 'react';
import shortid from 'shortid';
import List from './List';

export const DataContext = createContext();

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [editedItem, setEditedItem] = useState(null);
  const [data, setData] = useState({});
  const [ids, setIds] = useState([]);
  const nameInputRef = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddName = () => {
    const newName = nameInputRef.current.value.trim();
    if (newName === '') return;

    const newId = shortid.generate();
    setData((prevData) => {
      const newData = { ...prevData };
      newData[newId] = { name: newName, id: newId };
      return newData;
    });
    nameInputRef.current.value = '';

    const forId = { ...ids };
    forId[selectedOption] = forId[selectedOption] || [];
    forId[selectedOption].push(newId);
    setIds(forId);
  };

  const handleEditName = (item) => {
    nameInputRef.current.value = item.name;
    setEditedItem(item);
  };

  const handleUpdateName = () => {
    const newName = nameInputRef.current.value.trim();
    if (newName === '') return;

    const updatedData = { ...data };
    if (editedItem) {
      updatedData[editedItem.id].name = newName;
      setData(updatedData);
      nameInputRef.current.value = '';
      setEditedItem(null);
    }
  };

  const handleCancelEdit = () => {
    nameInputRef.current.value = '';
    setEditedItem(null);
  };

  const handleDeleteName = (itemId) => {
    const updatedData = { ...data };
    if (itemId && updatedData[itemId]) {
      delete updatedData[itemId];
      setData(updatedData);

      setIds((prevIds) => {
        const newIds = { ...prevIds };
        const index = newIds[selectedOption].indexOf(itemId);
        if (index > -1) {
          newIds[selectedOption].splice(index, 1);
        }
        return newIds;
      });
    }
  };

  const filteredIds = ids[selectedOption] || [];
  return (
    <div className="container py-4">
      <select className="form-select mb-3" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      {selectedOption && (
        <div>
          {editedItem ? (
            <div>
              <input
                className="form-control mb-2"
                type="text"
                ref={nameInputRef}
                placeholder={`Enter ${selectedOption} name`}
              />
              <button className="btn btn-primary" onClick={() => handleUpdateName(editedItem.id)}>
                Update Name
              </button>
              <button className="btn btn-danger" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <input
                className="form-control mb-2"
                type="text"
                ref={nameInputRef}
                placeholder={`Enter ${selectedOption} name`}
              />
              <button className="btn btn-primary" onClick={handleAddName}>
                Add
              </button>
            </div>
          )}
        </div>
      )}
      <DataContext.Provider value={data}>
            {selectedOption &&
        filteredIds.map((index) => (
          <List key={index} id={index} selectedOption={selectedOption} handleEditName={handleEditName} handleDeleteName={handleDeleteName} />
        ))}
        </DataContext.Provider>
    </div>
  );
};

export default Form;
