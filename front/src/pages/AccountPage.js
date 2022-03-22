import { useState, useEffect } from "react";
import Header from "../components/Header";
import SubmissionForm from "../components/SubmissionForm";
import MealsContainer from "../containers/MealsContainer";

const AccountPage = ({allMeals, user, setUser, faves}) => {

    const [faveMeals, setFaveMeals] = useState([]);

    const loadFaveMeals = () => {
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
            <Header/>
            <SubmissionForm user={user} onSubmitUser={setUser}/>
            <MealsContainer meals={faveMeals}/>
        </>
    );
}

export default AccountPage;