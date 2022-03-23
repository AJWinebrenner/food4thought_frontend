import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {


    return(
        <>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/account" >Account</Link>
            </li>
            <li>
              <Link to="/meals" >All recipes</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
        </>
    );
}

export default Header;