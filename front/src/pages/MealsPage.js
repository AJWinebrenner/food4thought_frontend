import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";
import CardNumHeader from "../components/CardNumHeader";


const MealsPage = ({allMeals, user, faves, setFaves, cardNum, setCardNum, setMealId, routeChange}) => {



    
    return(
        <>
            <MealsContainer meals={allMeals} faves = {faves} setFaves={setFaves} cards={cardNum} setCardNum={setCardNum} setMealId={setMealId} routeChange={routeChange}/>
        </>
    );
}

export default MealsPage;