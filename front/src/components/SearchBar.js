import { useState } from "react";

const SearchBar = ({ meals, setFilterMeals }) => {
	const [searchTerm, setSearchTerm] = useState("");
	// console.log(searchTerm.toLowerCase());

	return (
		<>
			<form className="ribbon middleFlex">
				<input
					type="text"
					placeholder="Search meal"
					onChange={(event) => setSearchTerm(event.target.value)}
				></input>
				<input className="button" type="submit" value="search" />
			</form>
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
