
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {

    // redirect on click
    let navigate = useNavigate(); 
    const routeChange = (route) =>{
        let path = `/${route}`; 
        navigate(path);
    }
    
    return (
        <>
            <div className="splash">
            </div>
            <section className="about ">
                <p className="ribbon slogan"><label className="padding">In need of inspiration? Enter an ingredient and find tasty recipes for you to enjoy.</label></p>
                <h2 className="padding">Who are we?</h2>
                <p className="padding">Food4Thought is a recipe search engine that lets you search by ingredients you have at home. Find thousands of recipes you can make right now with the click of a button!</p>
            </section>
            <section className="links bubble card">
                <article className="account">
                    <h3 className="marginBelow card__title">Your account</h3>
                    <div className="innerBubble">
                    <p className="marginBelow">Go to your account page to see your saved favourites, or to get a personalised recipe!</p>
                    <input className="button submitButton" onClick={() => routeChange('account')} type="submit" value="My Account" />
                    </div>
                </article>
                <br/>
                
                <article className="allMeals">
                    <h3 className="marginBelow">Our recipes</h3>
                    <div className="innerBubble">
                    <p className="marginBelow">View our huge collection of delicious recipes...</p>
                    <input className="button submitButton" onClick={() => routeChange('meals')} type="submit" value="All Recipes" />
                    </div>
                </article>
            </section>

            <Footer/>
        </>
    )
}
export default LandingPage;