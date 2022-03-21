import { useState } from 'react';

const MealCard = ({meal}) => {


    return(
        <p>{meal.name}</p>
    );
}

export default MealCard;