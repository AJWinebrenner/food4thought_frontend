import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";


const MealsPage = ({user, faves}) => {

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


    return(
        <>
            <Header/>
            <SuggestedMealsContainer user = {user} faves = {faves}/>
            <MealsContainer meals={allMeals}/>

        </>
    );
}

export default MealsPage;