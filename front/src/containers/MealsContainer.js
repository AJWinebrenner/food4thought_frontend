import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";
import CardNumHeader from "../components/CardNumHeader";

const MealsContainer = ({meals, faves, cards, setCardNum}) => {

    const cardsPerPage = cards;
    const lastSheet = Math.ceil(meals.length/cardsPerPage);
    const [mealCards, setMealCards] = useState([]);
    const [sheetNo, setSheetNo] = useState(1);

    const updateMealCards = () => {
        // setMealCards([]);
        const newMealCards = [];
        const start = (sheetNo-1) * cardsPerPage;

        for (let i = start; i < start + cardsPerPage; i++) {
            if (meals.length > i) {
                const meal = meals.at(i);
                newMealCards.push(<MealCard meal={meal} key={meal.id} faves={faves}/>)
            }
        }
        setMealCards(newMealCards);
    }

    const cycleSheet = (cycleAmount) => {
        const target = sheetNo + cycleAmount;
        if (target > 0 && target <= lastSheet) {
            setSheetNo(target);
        }
    }

    useEffect(updateMealCards,[meals, sheetNo,faves]);
    useEffect( updateMealCards, [cards])

    return (
        <>
            <h2>Meal Container</h2>
            <SearchBar/>
            <CardNumHeader setCardNum={setCardNum}/>
            <button onClick={() => cycleSheet(-1)}>Back</button>
            <span>{sheetNo}/{lastSheet}</span>
            <button onClick={() => cycleSheet(1)}>Next</button>
            <div className="cardFlex">
                {mealCards}
            </div>
        </>
    )
}

export default MealsContainer;