import Header from "../components/Header";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";
import MealsContainer from "../containers/MealsContainer";
import { useEffect, useState } from "react";


const MealsPage = ({allMeals, user, faves}) => {

    return(
        <>
            <Header/>
            <SuggestedMealsContainer user = {user} faves = {faves}/>
            <MealsContainer meals={allMeals} faves = {faves}/>
        </>
    );
}

export default MealsPage;