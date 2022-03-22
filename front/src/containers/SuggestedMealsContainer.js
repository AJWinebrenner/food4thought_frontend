import MealCard from "../components/MealCard";
import ChefCardMini from "../components/ChefCardMini";
import { useState, useEffect } from "react";

const SuggestedMealsContainer = ({user, faves}) => {

    const [suggested, setSuggested] = useState({});
    const [chefs, setChefs] = useState([]);

    //validation
    const hasInfo = () => {
        if (user.mainIngredient && user.difficulty) {
            return true;
        }
        else {
            return false;
        }
    }

    const suggest = () => {
        if (hasInfo()) {
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
                .then(meal => {
                    setSuggested(meal);
                    if (meal.chefs){
                        const chefCards = meal.chefs.map(chef => {
                            return <ChefCardMini chef={chef} key={chef.id} />
                        })
                        setChefs(chefCards);
                    } else {
                        setChefs([]);
                    }
                })
                // catch error
                .catch(error => console.error(error))   
        }
    
    }

    useEffect(suggest, [user]);

    // create array of ChefCardMini and use that instead
    if (hasInfo()) {
        return (
            <>
                <h2>Suggested</h2>
                <MealCard meal={suggested}/>
                {chefs}
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