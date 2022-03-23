import { useEffect, useState } from 'react';

const MealCard = ({meal, faves, routeChange}) => {
    
    // make empty placeholder objects
    let outputMeal;
    let favourite ='';
    // check if meal is a favourited meal
    for (let i = 0; i<=faves.length; i++){
        if (meal.id === faves[i]){
            favourite = 'favourite';
        }
    }
    // creat mealCard classes dependent on if favourite
    let classList = `card ${favourite}`;
    
    // check that meal is not empty
    if (meal.name){
        outputMeal = meal;     
    // if suggested meal does not exist
    } else {
        outputMeal = {
            "id": 4,
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

    return(
        <article onClick={() => routeChange(meal.id)} className={classList}>
                <h3>{outputMeal.name}</h3>
                <p>{outputMeal.ingredients}</p>
            </article>
    );
}

export default MealCard;