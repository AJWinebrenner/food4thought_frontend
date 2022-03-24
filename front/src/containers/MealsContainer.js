import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

const MealsContainer = ({ meals, faves, setFaves, setMealId }) => {
    const [cards, setCards] = useState(4);
	const [sheetNo, setSheetNo] = useState(1);
	const [lastSheet, setLastSheet] = useState(1);
    const [filterMeals, setFilterMeals] = useState([meals]);
	const [mealCards, setMealCards] = useState([]);


	const findLastSheet = () => {
		if (filterMeals.length == 0) {
			setLastSheet(1);
		} else {
			setLastSheet(Math.ceil(filterMeals.length / cards));
		}
	};

	const checkSheetNo = () => {
		if (sheetNo > lastSheet) {
			setSheetNo(lastSheet);
		}
	}

	// const newMealsAllergy = () => {
	// 	{
	// 		meals
	// 			.filter((meal) => {
	// 				let allergen = meal.allergyInfo;
	// 				if (searchTerm == "") {
	// 					return meal;
	// 					console.log("me");
	// 				} else if (allergen.toLowerCase() === searchTerm.toLowerCase()) {
	// 					console.log("hi");
	// 				}
	// 			})
	// 			.map((meal) => {
	// 				console.log(meal.allergyInfo);
	// 				return (
	// 					<div key={meal.id}>
	// 						<p key={meal.name}>{meal.name}</p>
	// 						<p key={meal.allergyInfo}>{meal.allergy_info}</p>
	// 					</div>
	// 				);
	// 			});
	// 	}
	// };


	const updateMealCards = () => {
		// setMealCards([]);
		const newMealCards = [];
		const start = (sheetNo - 1) * cards;

		for (let i = start; i < start + cards; i++) {
			if (filterMeals.length > i) {
				const meal = filterMeals.at(i);
				newMealCards.push(
					<MealCard
						meal={meal}
						key={meal.id}
						faves={faves}
						setFaves={setFaves}
                        setMealId={setMealId}
					/>
				);
			}
		}
		setMealCards(newMealCards);
	};

	const cycleSheet = (cycleAmount) => {
		const target = sheetNo + cycleAmount;
		if (target > 0 && target <= lastSheet) {
			setSheetNo(target);
		}
	};

	useEffect(() => setFilterMeals(meals), [meals]);
	useEffect(findLastSheet, [filterMeals, cards]);
	useEffect(checkSheetNo, [lastSheet]);
	useEffect(updateMealCards, [sheetNo, faves, cards, filterMeals]);
	
	return (
		<>
			<h2>Meal Container</h2>
			<SearchBar meals={meals} setFilterMeals={setFilterMeals} />
			<p>
            Select number of meal per page: <label onClick={() => setCards(1)}>1</label>, <label onClick={() => setCards(4)}>4</label>, <label onClick={() => setCards(6)}>6</label>, <label onClick={() => setCards(8)}>8</label>.
            </p>
			<button onClick={() => cycleSheet(-1)}>Back</button>
			<span>
				{sheetNo}/{lastSheet}
			</span>
			<button onClick={() => cycleSheet(1)}>Next</button>
			<div className="cardFlex">
                {mealCards}
            </div>
		</>
	);
};

export default MealsContainer;
