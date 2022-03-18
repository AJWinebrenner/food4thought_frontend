import MealCard from "../components/MealCard";
import ChefCardMini from "../components/ChefCardMini";

const SuggestedMealsContainer = () => {


    // create array of ChefCardMini and use that instead
    return (
        <>
            <h2>Suggested</h2>
            <MealCard/>
            <ChefCardMini/> 
        </>
    )
}

export default SuggestedMealsContainer;