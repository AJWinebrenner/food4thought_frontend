import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const MealCard = ({meal, faves, setFaves, setMealId}) => {
    
    // make empty placeholder objects
    let outputMeal;
    let favouriteClass = 'notFavourite';

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
                favouriteClass = 'notFavourite';
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
        <article className={`bubble card ${favouriteClass}`}>
            <div className="lineFlex marginBelow">
                <h3 className="card__title" onClick={() => routeChange()}>{outputMeal.name}</h3>
                <div className={`card__button ${favouriteClass}`} onClick={() => toggleFavourite(outputMeal.id)}></div>
            </div>
            <div className="innerBubble">
                <p>Difficulty: {outputMeal.difficulty.toLowerCase()}</p>
            </div>
        </article>
    );
}

export default MealCard;