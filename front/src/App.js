import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MealsPage from './pages/MealsPage';
import './App.css';
import AccountPage from './pages/AccountPage';
import SingleMealPage from './pages/SingleMealPage';
import Header from './components/Header';
import LandingPage from './pages/LandingPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChefsPage from './pages/ChefsPage';


function App() {

  const [user, setUser] = useState({mainIngredient: "Milk", difficulty: "BEGINNER", wantHelp: true});
  const [faves, setFaves] = useState([1,6,7,8,9,10,11,12]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [allMeals, setAllMeals] = useState([]);
  const [mealId, setMealId] = useState(0);

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

    

    useEffect(loadAllMeals, [faves]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage/>}/>
          <Route path="account" element={<AccountPage setUser={setUser} allMeals={allMeals} user={user} faves={faves} setFaves={setFaves} setMealId={setMealId}/>}/>
          <Route path="meals" element={<MealsPage allMeals={allMeals} user={user} faves={faves} setFaves={setFaves}  setMealId={setMealId}/>}/>
          <Route path="meal-info" element={<SingleMealPage setFaves={setFaves} mealId={mealId} faves={faves}/>} />
          <Route path="chefs" element={<ChefsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


      {/* <AccountPage setUser={setUser} allMeals={allMeals} user={user} faves={faves}/>
      <MealsPage allMeals={allMeals} user={user} faves={faves} />
      <SingleMealPage setFaves={setFaves} mealId={2} faves={faves}/> */}
    