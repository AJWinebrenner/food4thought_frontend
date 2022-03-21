import { useState } from 'react';

const MealCard = ({meal}) => {


    return(
        <>
            <h3>{meal.name}</h3>
            <p>{meal.ingredients}</p>
        </>
    );
}

export default MealCard;