import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

const MealsContainer = ({meals}) => {

    const mealCards = meals.map(meal => {
        return <MealCard meal={meal} key={meal.id}/>
    })

    return (
        <>
            <h2>Meal Container</h2>
            <SearchBar/>
            {mealCards}
        </>
    )
}

export default MealsContainer;