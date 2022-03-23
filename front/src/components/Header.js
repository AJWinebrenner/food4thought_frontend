import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {


    return(
        <>
        <h1>Food4Thought</h1>
        <nav>
          
        
              <Link className = "nav" to="/" >Home</Link>
            
              <Link className = "nav" to="/account" >Account</Link>
           
            
              <Link className = "nav" to="/meals" >All recipes</Link>
            
          
        </nav>
        <Outlet/>
        </>
    );
}

export default Header;