import { useState } from 'react';
import MealsPage from './pages/MealsPage';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [favs, setFavs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <MealsPage/>
    </>
  );
}

export default App;