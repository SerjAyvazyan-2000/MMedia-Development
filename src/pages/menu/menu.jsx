import React from 'react';
import {navLinks} from "../../utils/routes";
import {NavLink} from "react-router-dom";
import "./style.scss"

const Menu = () => {
    return <nav className="menu-body">
         <ul className="menu-list">
             {navLinks.map(link => (
                  <li>
                       <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
             ))}
             <a className="header_phone" href=""><span className="icon-phone"></span></a>
         </ul>
    </nav>

};

export default Menu;