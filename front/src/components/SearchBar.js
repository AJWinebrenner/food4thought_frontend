import { useState, useEffect } from "react";

const SearchBar = ({ meals, setFilterMeals }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [terms, setTerms] = useState([]);

	const findTerms = () => {
		setTerms(searchTerm.trim().split(" "));
	}

	const handleFilter = (e) => {
		e.preventDefault();

		if (!searchTerm) {
			return;
		}

		let filterMeals = [];
		filterMeals = meals.filter(meal => {
			let match = false;
			for (let i = 0; i < terms.length; i++)
				if (meal.name.toLowerCase().includes(terms[i].toLowerCase())) {
					match = true;
					break;
				}
			return match;
		})
		setFilterMeals(filterMeals);
	}

	useEffect(findTerms, [searchTerm]);

	return (
		<>
			<form className="ribbon middleFlex" onSubmit={handleFilter}>
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

export default SearchBar;