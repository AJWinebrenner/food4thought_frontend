import MealCard from "../components/MealCard";

const MealsContainer = ({meals}) => {

    const mealCards = meals.map(meal => {
        return <MealCard meal={meal} key={meal.id}/>
    })

    return (
        <>
            <h2>Meal Container</h2>
            {mealCards}
        </>
    )
}

export default MealsContainer;