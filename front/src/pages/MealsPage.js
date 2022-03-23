import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";
import CardNumHeader from "../components/CardNumHeader";


const MealsPage = ({allMeals, user, faves, cardNum, setCardNum, setMealId, routeChange}) => {



    
    return(
        <>
            <MealsContainer meals={allMeals} faves = {faves} cards={cardNum} setCardNum={setCardNum} setMealId={setMealId} routeChange={routeChange}/>
        </>
    );
}

export default MealsPage;