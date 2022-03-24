import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {


    return(
        <>
        <header className="bigRibbon">
            <div id="logo" className="centerText">
                <img id="logo__img" src="../F4Tlogo.png"/>
                <div>
                    <h1 id="title">Food4Thought</h1>
                    <nav className="middleFlex">
                        <Link className = "nav" to="/" >Home</Link> - 
                        
                        <Link className = "nav" to="/account" >Account</Link> - 
                    
                        <Link className = "nav" to="/meals" >All recipes</Link>
                    </nav>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    );
}

export default Header;