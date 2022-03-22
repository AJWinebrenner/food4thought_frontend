import { useState, useEffect } from "react";
import ChefCard from "../components/ChefCard";

const AllChefsContainer = () => {

    const [chefs, setChefs] = useState([]);

    const loadAllChefs = () => {
        fetch("http://localhost:8080/chefs", { 
            // authorize
            headers: {
                'Authorization': 'Basic '+btoa('foo:foo'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            // add data to allMeals
            .then(response => response.json())
            .then(data => setChefs(data))
            // catch error
            .catch(error => console.error(error))   
    }

    useEffect (loadAllChefs, []);

    const newChefCards = chefs.map(chef => {
        return <ChefCard chef ={chef} key={chef.id} />
    })

    return (<>{newChefCards}</>)
}

export default AllChefsContainer;