import React, { useContext } from "react";
import { DataContext } from './Form';

const List = ({ id, handleEditName, handleDeleteName }) => {
  const data = useContext(DataContext);
  
  const item = data[id];
  console.log("🚀 ~ ali")
  
  return (
    <>
     <div key={item.id}
            className="d-flex align-items-center border-bottom justify-content-between p-1"
          >
            <span>{item.name}</span>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => handleEditName(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteName(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
    </>
  );
};


export default List;
