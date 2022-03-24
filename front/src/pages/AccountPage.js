import { useState, useEffect } from "react";
import Header from "../components/Header";
import SubmissionForm from "../components/SubmissionForm";
import MealsContainer from "../containers/MealsContainer";
import SuggestedMealsContainer from "../containers/SuggestedMealsContainer";

const AccountPage = ({allMeals, user, setUser, faves, setFaves, cardNum, setCardNum, setMealId, routeChange}) => {

    const [faveMeals, setFaveMeals] = useState([]);

    const loadFaveMeals = () => {
        console.log(faves);
        const faveArray = [];
        allMeals.forEach(meal => {
            for (let i = 0; i < faves.length; i++) {
                if (meal.id === faves[i]) {
                    faveArray.push(meal);
                }
            }
        });
        setFaveMeals(faveArray);
    }

    useEffect(loadFaveMeals, [allMeals, faves]);

    return(
        <>
        <hr/>
            <SubmissionForm user={user} onSubmitUser={setUser}/>
            <h2 className="ribbon">Your recommended recipe:</h2>
            <SuggestedMealsContainer user = {user} faves = {faves} setFaves={setFaves} setMealId={setMealId}/>
            <hr/>
            <h2 className="bigRibbon white-text">Your favourites:</h2>
            <MealsContainer meals={faveMeals} faves={faves} setFaves={setFaves} setMealId={setMealId}/>
        </>
    );
}

export default AccountPage;