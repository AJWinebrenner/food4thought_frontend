import { useEffect, useState } from "react";

const SubmissionForm = ({ user, onSubmitUser }) => {
	const [mainIngredient, setMainIngredient] = useState("");
	const [difficulty, setDifficulty] = useState("Beginner");
	const [wantHelp, setWantHelp] = useState(false);

	const handleChange = (event, callback) => {
		callback(event.target.value); 
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// if(!mainIngredient) {
		//     alert("All fields need to be filled")
		// }

		const newSubmission = {
			mainIngredient: mainIngredient,
			difficulty: difficulty,
			wantHelp: wantHelp,
		};

		onSubmitUser(newSubmission);
		console.log("submitting user");
		console.log(newSubmission);

		// setMainIngredient(user.mainIngredient)
		// setDifficulty(user.difficulty)
		// setWantHelp(user.wantHelp)

		//refresh:

		// setMainIngredient("")
		// setDifficulty("")
		// setWantHelp(false)
	};

	return (
		<form onSubmit={handleFormSubmit} >
			<label htmlFor="main Ingredient">Main ingredient: </label>
			<input
				type="text"
				id="main Ingredient"
				value={mainIngredient}
				placeholder="Ingredient"
				onChange={(event) => handleChange(event, setMainIngredient)}
			/>

			<br />

			<label htmlFor="difficulty">Difficulty level:  </label>
			<select
				name="choice"
				id="difficulty"
				onChange={(event) => handleChange(event, setDifficulty)}
			>
				{/* <option selected>Select Difficulty</option> */}
				<option value="BEGINNER">Beginner</option>
				<option value="INTERMEDIATE">Intermediate</option>
				<option value="ADVANCED">Advanced</option>
			</select>

			<br/>

			<label htmlFor="Yes">Do you want help?  </label>
			<input className="marginBelow"
				type="checkbox"
				id="Yes"
				name="wantHelp"
				value="help"
				onClick={(event) => setWantHelp(event.target.checked)}
			/>
			<br/>
			<input className="button submitButton" type="submit" value="Find Meal" />
		</form>
	);
};

//onChange={(event) => handleChange(event, setWantHelp)}

export default SubmissionForm;
