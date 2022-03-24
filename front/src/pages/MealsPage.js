import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";

const MealsPage = ({allMeals, user, faves, setFaves, setMealId}) => {



    
    return(
        <>
            <h2 className="ribbon primary-text">All recipes:</h2>
            <MealsContainer meals={allMeals} faves={faves} setFaves={setFaves} setMealId={setMealId}/>
        </>
    );
}

export default MealsPage;