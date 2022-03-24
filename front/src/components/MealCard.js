import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const MealCard = ({meal, faves, setFaves, setMealId}) => {
    
    // make empty placeholder objects
    let outputMeal;
    let favouriteClass = '';

    // check that meal is not empty
    if (meal.name){
        outputMeal = meal; 
        // check if meal is a favourited meal
        for (let i = 0; i<=faves.length; i++){
            if (meal.id === faves[i]){
                favouriteClass = 'favourite';
                break;
            } 
        }     
    // if suggested meal does not exist
    } else {
        outputMeal = {
            "id": 0,
            "name": "Nothing Here",
            "difficulty": "INTERMEDIATE",
            "allergyInfo": [
            "SOY",
            "WHEAT"
            ],
            "ingredients": [
            "Sorry, no meal found fitting the criteria"
            ],
            "steps": "https://www.myrecipes.com/recipe/hearty-pancakes",
            "mealTime": "BREAKFAST",
            "chefs": null
        }
    }

    // when button clicked, toggle is/isn't favourite
    const toggleFavourite = (id) => {
        let newFaves = [];
        for (const f of faves){
            if (f === id){
                // replace faves array with filtered array that excludes this id
                newFaves = faves.filter(fave => fave !== id);
                setFaves(newFaves);
                favouriteClass = '';
                return;
            }
        }
        newFaves = [...faves, id];
        setFaves(newFaves);
        favouriteClass = 'favourite';
    }

    // redirect on click
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        setMealId(meal.id);
        let path = `/meal-info`; 
        navigate(path);
    }


    return(
        <article className={`card ${favouriteClass}`}>
            <h3 onClick={() => routeChange()}>{outputMeal.name}</h3>
            <div className={favouriteClass} onClick={() => toggleFavourite(outputMeal.id)}>O</div>
            {/* <input type="checkbox" id="Yes" name="isFavourite" value="help" onClick={() => toggleFavourite()}/> */}
            <p>{outputMeal.ingredients}</p>
        </article>
    );
}

export default MealCard;