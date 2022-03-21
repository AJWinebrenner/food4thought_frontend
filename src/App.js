import { useState } from 'react';
import MealsPage from './pages/MealsPage';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [faves, setFaves] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <MealsPage user = {user} faves = {faves} />

    </>
  );
}

export default App;