import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";
import CardNumHeader from "../components/CardNumHeader";


const MealsPage = ({allMeals, user, faves, cardNum, setCardNum}) => {



    
    return(
        <>
            <MealsContainer meals={allMeals} faves = {faves} cards={cardNum} setCardNum={setCardNum}/>
        </>
    );
}

export default MealsPage;