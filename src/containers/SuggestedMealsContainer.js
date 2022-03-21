import MealCard from "../components/MealCard";
import ChefCardMini from "../components/ChefCardMini";
import { useState, useEffect } from "react";

const SuggestedMealsContainer = ({user, faves}) => {

    const [suggested, setSuggested] = useState({});

    const suggest = () => {
        fetch("http://localhost:8080/user", { 
            // authorize
            method: "GET",
            headers: {
                'Authorization': 'Basic '+btoa('foo:foo'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            
            },
            body: user
        })
            // add data to allMeals
            .then(response => response.json())
            .then(data => setSuggested(data))
            // catch error
            .catch(error => console.error(error))   
    }

    useEffect(suggest, [user]);



    // create array of ChefCardMini and use that instead
    return (
        <>
            <h2>Suggested</h2>
            <MealCard meal={suggested}/>
            <ChefCardMini/> 
        </>
    )
}

export default SuggestedMealsContainer;