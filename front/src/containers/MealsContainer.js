import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";
import CardNumHeader from "../components/CardNumHeader";

const MealsContainer = ({ meals, faves, cards, setCardNum, setMealId }) => {
	const [filterMeals, setFilterMeals] = useState(meals);
	const [lastSheet, setLastSheet] = useState(Math.ceil(meals.length / cards));
	const [mealCards, setMealCards] = useState([]);
	const [sheetNo, setSheetNo] = useState(1);

	// console.log(`the list of meals: ${filterMeals}`);

	const findLastSheet = () => {
		setLastSheet(Math.ceil(filterMeals.length / cards));
		setSheetNo(1);
		// console.log(`the number of sheets: ${lastSheet}`);
	};

	let navigate = useNavigate();
	const routeChange = (id) => {
		setMealId(id);
		let path = `/meal-info`;
		navigate(path);
	};

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
						routeChange={routeChange}
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
	useEffect(findLastSheet, [filterMeals]);
	useEffect(updateMealCards, [sheetNo, faves, cards]);

	return (
		<>
			<h2>Meal Container</h2>
			<SearchBar meals={meals} setFilterMeals={setFilterMeals} />
			<CardNumHeader setCardNum={setCardNum} />
			<button onClick={() => cycleSheet(-1)}>Back</button>
			<span>
				{sheetNo}/{lastSheet}
			</span>
			<button onClick={() => cycleSheet(1)}>Next</button>
			<div className="cardFlex">{mealCards}</div>
		</>
	);
};

export default MealsContainer;
