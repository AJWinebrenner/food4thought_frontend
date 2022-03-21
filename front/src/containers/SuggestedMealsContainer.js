import MealCard from "../components/MealCard";
import ChefCardMini from "../components/ChefCardMini";
import { useState, useEffect } from "react";

const SuggestedMealsContainer = ({user, faves}) => {

    const [suggested, setSuggested] = useState({});

    //validation
    const isInfo = () => {
        if (user.mainIngredient && user.difficulty && user.wantHelp) {
            return true;
        }
        else {
            return false;
        }
    }

    const suggest = () => {
        if (isInfo()) {
            fetch("http://localhost:8080/user", { 
            // authorize
                method: "POST",
                headers: {
                    'Authorization': 'Basic '+btoa('foo:foo'), 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                // set by response body
                .then(response => response.json())
                .then(data => setSuggested(data))
                // catch error
                .catch(error => console.error(error))   
        }
        
    }

    useEffect(suggest, [user]);



    // create array of ChefCardMini and use that instead
    if (isInfo()) {
        return (
            <>
                <h2>Suggested</h2>
                <MealCard meal={suggested}/>
                <ChefCardMini/> 
            </>
        )
    } else {
        return (
            <>
                <h2>Suggested</h2>
                <p>no user details</p>
            </>
        )
    }
        
}

export default SuggestedMealsContainer;