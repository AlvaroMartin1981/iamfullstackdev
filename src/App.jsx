import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import ItemDetailPage from "./ItemDetailPage.jsx";
import InputCreate from "./InputCreate.jsx";

const App = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:3000'

  const fetchData = async () => {
    try {
      const response = await fetch(urlApi)
      const resData = await response.json()
      setData(resData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  const handleAddTask = async (taskData) => {
    try {
      const response = await fetch(`${urlApi}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      const resData = await response.json();
      setData([...data, resData]); // Actualizamos el estado con los datos actualizados
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/create">Crear tarea</Link>
        </nav>
        {data === null 
          ? (<div>Cargando...</div>) 
          : 
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/create" element={<InputCreate handleAddTask={handleAddTask} />} />
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item} />} />
            ))}
          </Routes>
        }
      </div>
    </Router>
  )
};

export default App;
