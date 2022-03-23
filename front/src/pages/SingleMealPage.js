import { useEffect, useState } from "react";
import Header from "../components/Header";

const SingleMealPage = ({setFaves, mealId, faves}) => {

    const [currentMeal, setCurrentMeal] = useState({});

    const loadMealById = () => {
        fetch(`http://localhost:8080/meals/${mealId}`, { 
            // authorize
            headers: {
                'Authorization': 'Basic '+btoa('foo:foo'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            // add data to allMeals
            .then(response => response.json())
            .then(output => setCurrentMeal(output))
            // catch error
            .catch(error => console.error(error))   
    }

    useEffect(loadMealById, [])

    return (
        <>
            <section>
                <h2>{currentMeal.name}</h2>
                <h3>{currentMeal.mealTime}</h3>
                <h3>{currentMeal.difficulty}</h3>
            </section>
            <section>
                <p>
                    Allergies: {currentMeal.allergyInfo}<br/>
                    Ingredients: {currentMeal.ingredients}<br/>
                    Recipe: <a href={currentMeal.steps}>Instructions link</a>
                </p>
            </section>
        </>
    )
}

export default SingleMealPage;