import { useState, useEffect } from 'react';
import MealsPage from './pages/MealsPage';
import './App.css';
import AccountPage from './pages/AccountPage';
import SingleMealPage from './pages/SingleMealPage';
import ChefsPage from './pages/ChefsPage';


function App() {

  const [user, setUser] = useState({mainIngredient: "Chicken", difficulty: "BEGINNER", wantHelp: true});
  const [faves, setFaves] = useState([1,6,7,8,9,10,11,12]);
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
      <AccountPage setUser={setUser} allMeals={allMeals} user={user} faves={faves}/>
      <MealsPage allMeals={allMeals} user={user} faves={faves} />

      <SingleMealPage setFaves={setFaves} mealId={2} faves={faves}/>

      <ChefsPage />

    </>
  );
}

export default App;