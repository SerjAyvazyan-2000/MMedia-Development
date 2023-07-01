import React from 'react';
import {navLinks} from "../../utils/routes";
import {NavLink} from "react-router-dom";
import "./style.scss"

const Menu = ({openMenu}) => {
    return <>
        {/*<div className="nav-bg"></div>*/}
        <nav className={openMenu ? "menu-body active" : "menu-body "}>
         <ul className="menu-list">
             {navLinks.map(link => (
                  <li>
                       <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
             ))}
         </ul>
    </nav>
        </>

};

export default Menu;