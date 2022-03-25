import Header from "../components/Header";
import Footer from "../components/Footer";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";

const MealsPage = ({allMeals, user, faves, setFaves, setMealId}) => {



    
    return(
        <>
            <h2 className="ribbon white-text">All recipes:</h2>
            <MealsContainer meals={allMeals} faves={faves} setFaves={setFaves} setMealId={setMealId}/>
            <Footer/>
        </>
    );
}

export default MealsPage;