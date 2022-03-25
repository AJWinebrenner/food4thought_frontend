import { useEffect, useState } from "react";
import Header from "../components/Header";
import MealCard from "../components/MealCard";

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

    let ingredientArray = [];

    const createLists = () => {
        if (currentMeal.ingredients) {
            ingredientArray = <ul>
                    {currentMeal.ingredients.map((ingredient, index) => {
                        return(
                            <li key={index}>{ingredient}</li>
                        );
                    })}
                </ul>
        }
    }

    useEffect(loadMealById, [])
    useEffect(createLists ,[currentMeal])

    return (
        <>
            <section className={`bubble card favourite`}>
                <div className="lineFlex marginBelow">
                    <h2 className="card__title">{currentMeal.name}</h2>
                    <div className={`card__button`}>0</div>
                </div>
                <div className="innerBubble marginBelow">

                    <h3 className="centerText">{currentMeal.mealTime}</h3>
                </div>
                <div className="innerBubble">
                    <h3>Difficulty: {currentMeal.difficulty}</h3>
                    <p>
                        Allergies: {currentMeal.allergyInfo}<br/>
                        Ingredients: <ul>{ingredientArray}</ul> <br/>
                        Recipe: <a href={currentMeal.steps} className="accent-text">Instructions link</a>
                    </p>
                </div>
            </section>
        </>
    )
}


{/* 
<p> Allergies </p>
                    <ul key={currentMeal.allergyInfo}> {currentMeal.allergyInfo.map(allergy => {
                        return (<li key={allergy}> { allergy } </li>)})}</ul>
*/}


{/* <p> Allergies </p>
<ul key={currentMeal.allergyInfo}> {currentMeal.allergyInfo.map(allergy => {
                    return(
                        <li key={allergy}}> {allergy} </li>
                    )
                })}</ul> */}


export default SingleMealPage;