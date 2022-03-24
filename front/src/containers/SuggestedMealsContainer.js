import MealCard from "../components/MealCard";
import ChefCardMini from "../components/ChefCardMini";
import { useState, useEffect, forceUpdate } from "react";
import { useNavigate } from "react-router-dom";

const SuggestedMealsContainer = ({user, faves, setFaves, setMealId}) => {

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
                    // find relevant chefs
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
                .catch(error => console.error(error)
                    )   
        }
    
    }

    

    useEffect(suggest, [user]);
    // useEffect(() => {
    //     for (let i = 0; i<=faves.length; i++){
    //         if (suggested.id === faves[i]){
    //             setFavouriteClass('favourite');
    //             break;
    //         } 
    //     } 
    //     setFavouriteClass('');
    // }, [faves]);
    

    // create array of ChefCardMini and use that instead
    if (hasInfo()) {
        return (
            <>
                <h2>Suggested</h2>
                <MealCard meal={suggested} faves={faves} setFaves={setFaves} setMealId={setMealId}/>
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