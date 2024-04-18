import { useState } from "react";

function InputCreate({ handleAddTask }) {
  const [inputData, setInputData] = useState('');

  const handleTaskName = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    if (inputData.trim() === '') return; 
    handleAddTask({ title: inputData }); 
    setInputData(''); 
  };

  return (
    <>
      <input
        type="text"
        id="createInput"
        placeholder="Crea tarea"
        value={inputData}
        onChange={(e) => handleTaskName(e)} />
      <div>
        <button onClick={handleSubmit}>Agregar</button>
      </div>
    </>
  );
}

export default InputCreate;
