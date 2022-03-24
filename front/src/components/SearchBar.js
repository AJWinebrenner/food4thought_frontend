import { useState } from "react";

const SearchBar = ({ meals, setFilterMeals }) => {
	const [searchTerm, setSearchTerm] = useState("");
	// console.log(searchTerm.toLowerCase());

	return (
		<>
			<>
				<form>
					<input
						type="text"
						placeholder="Search"
						onChange={(event) => setSearchTerm(event.target.value)}
					></input>
					<input type="submit" value="submit" />
				</form>
			</>
		</>
	);
};
//onSubmit={handleSubmission}
export default SearchBar;

/**
 				{meals
					.filter((meal) => {
						let allergen = meal.allergyInfo;
						if (searchTerm == "") {
							return meal;
							console.log("me");
						} else if (allergen.toLowerCase() === searchTerm.toLowerCase()) {
							console.log("hi");
						}
					})
					.map((meal) => {
						console.log(meal.allergyInfo);
						return (
							<div key={meal.id}>
								<p key={meal.name}>{meal.name}</p>
								<p key={meal.allergyInfo}>{meal.allergy_info}</p>
							</div>
						);
					})}
 */
