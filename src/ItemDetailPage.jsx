const ItemDetailPage = ({item}) => {

  return (
    <>
      <h3>{item.title}</h3>
      <p>Compled: {`${item.completed}`}</p>
    </>
 
  );
};

export default ItemDetailPage;



/*import { useState } from "react";

const ItemDetailPage = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed); // Inicializamos el estado con el valor inicial de completado

  const handleCompletedChange = async (e) => {
    const newCompleted = e.target.checked;
    setCompleted(newCompleted);

    
    try {
      const response = await fetch(`http://localhost:3000/markascompleted/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: newCompleted }),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar la tarea');
      }
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      
    }
  };

  return (
    <>
      <h3>{item.title}</h3>
      <div>
        <label htmlFor="completedCheckbox">
          Completada:
          <input
            type="checkbox"
            id="completedCheckbox"
            checked={completed}
            onChange={(e) => handleCompletedChange(e)}
          />
        </label>
      </div>
      <p>Estado: {completed ? 'Completada' : 'Pendiente'}</p> 
    </>
  );
};

export default ItemDetailPage;*/
