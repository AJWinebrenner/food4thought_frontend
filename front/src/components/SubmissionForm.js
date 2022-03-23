import { useEffect, useState } from "react";

const SubmissionForm = ({user, onSubmitUser}) => {

    const [mainIngredient, setMainIngredient] = useState("");
    const [difficulty, setDifficulty] = useState("Beginner");
    const [wantHelp, setWantHelp] = useState(false);

    const handleChange = (event, callback) => {
        callback(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // if(!mainIngredient) {
        //     alert("All fields need to be filled")
        // }



        const newSubmission = {
            mainIngredient: mainIngredient,
            difficulty: difficulty,
            wantHelp: wantHelp
        }

        onSubmitUser(newSubmission);
        console.log('submitting user');
        console.log(newSubmission);

        // setMainIngredient(user.mainIngredient)
        // setDifficulty(user.difficulty)
        // setWantHelp(user.wantHelp)

        //refresh:

        // setMainIngredient("")
        // setDifficulty("")
        // setWantHelp(false)
    }




        return(
            
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="main Ingredient">Main ingredient: </label>
                <input type="text" id="main Ingredient" value={mainIngredient} onChange={(event) => handleChange(event, setMainIngredient)} />

                <select name="choice" onChange={(event) => handleChange(event, setDifficulty)}>
                    {/* <option selected>Select Difficulty</option> */}
                    <option value="BEGINNER" >Beginner</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                </select>

                <label htmlFor="Yes">Do you want help</label>
                <input type="checkbox" id="Yes" name="wantHelp" value="help" onClick={(event) => setWantHelp(event.target.checked)}/>

                <input type="submit" value="Submit" />

            </form>
            
        );
}

//onChange={(event) => handleChange(event, setWantHelp)}

export default SubmissionForm;