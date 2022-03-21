import { useState } from 'react';

const MealCard = ({meal}) => {


    return(
        <article class="card">
            <h3>{meal.name}</h3>
            <p>{meal.ingredients}</p>
        </article>
    );
}

export default MealCard;