import { useState, useEffect } from 'react';
import MealsPage from './pages/MealsPage';
import './App.css';
import AccountPage from './pages/AccountPage';

function App() {

  const [user, setUser] = useState({mainIngredient: "", difficulty: "", wantHelp: false});
  const [faves, setFaves] = useState([1,6,7,8]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [allMeals, setAllMeals] = useState([]);

    const loadAllMeals = () => {
        fetch("http://localhost:8080/meals", { 
            // authorize
            headers: {
                'Authorization': 'Basic '+btoa('foo:foo'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            // add data to allMeals
            .then(response => response.json())
            .then(data => setAllMeals(data))
            // catch error
            .catch(error => console.error(error))   
    }

    useEffect(loadAllMeals, []);

  return (
    <>
      <AccountPage allMeals={allMeals} user={user} faves={faves}/>
      <MealsPage allMeals={allMeals} user={user} faves={faves} />

    </>
  );
}

export default App;