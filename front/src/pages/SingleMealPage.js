import { useEffect, useState } from "react";
import Header from "../components/Header";
import MealCard from "../components/MealCard";
import Footer from "../components/Footer";


const SingleMealPage = ({setFaves, mealId, faves}) => {

    const [currentMeal, setCurrentMeal] = useState({});
    const [ingredientArray, setIngredientArray] = useState([]);
    const [allergenArray, setAllergenArray] = useState([]);
    const [favouriteClass, setFavouriteClass] = useState('notFavourite');

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
            .then(output => {
                setCurrentMeal(output)
                for (let i = 0; i<=faves.length; i++){
                    if (output.id === faves[i]){
                        setFavouriteClass('favourite');
                        break;
                    } 
                }
            })
            // catch error
            .catch(error => console.error(error))   
    }

    const createLists = () => {
        if (currentMeal.ingredients) {
            const newList = [];
            currentMeal.ingredients.forEach((ingredient, index) => {
                newList.push(
                    <li key={index}>{ingredient}</li>
                );
            setIngredientArray(newList)
        })}
        if (currentMeal.allergyInfo) {
            const newList = [];
            currentMeal.allergyInfo.forEach((allergen, index) => {
                newList.push(
                    <li key={index}>{allergen.toLowerCase()}</li>
                );
            setAllergenArray(newList)
        })} else {
            setAllergenArray([<li>No Allergens</li>])
        }
    }

    const toggleFavourite = (id) => {
        let newFaves = [];
        for (const f of faves){
            if (f === id){
                // replace faves array with filtered array that excludes this id
                newFaves = faves.filter(fave => fave !== id);
                setFaves(newFaves);
                setFavouriteClass('notFavourite')
                return;
            }
        }
        newFaves = [...faves, id];
        setFaves(newFaves);
        setFavouriteClass('favourite');
    }


    useEffect(loadMealById, [])
    useEffect(createLists ,[currentMeal])

    return (
        <>
            <article className={`bubble card ${favouriteClass}`}>
                <div className="lineFlex marginBelow">
                    <h2 className="card__title">{currentMeal.name}</h2>
                    <div className={`card__button ${favouriteClass}`} onClick={() => toggleFavourite(currentMeal.id)}></div>
                </div>
                <div className="innerBubble marginBelow">

                    <h3 className="centerText">{currentMeal.mealTime}</h3>
                </div>
                <div className="innerBubble">
                    <h3>Difficulty: {currentMeal.difficulty}</h3>
                    <p>
                        Allergies: <ul>{allergenArray}</ul><br/>
                        Ingredients: <ul>{ingredientArray}</ul> <br/>
                        Recipe: <a href={currentMeal.steps} className="accent-text">Instructions link</a>
                    </p>
                </div>
            </article>
        </>
    )
}

export default SingleMealPage;