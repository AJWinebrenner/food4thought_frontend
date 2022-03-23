import { useState } from 'react';

const MealCard = ({meal}) => {

    let outputMeal;
    if (meal.name){
        outputMeal = meal;
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
        <article className="card">
            <h3>{outputMeal.name}</h3>
            <p>{outputMeal.ingredients}</p>
        </article>
    );
}

export default MealCard;