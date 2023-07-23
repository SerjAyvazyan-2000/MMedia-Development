import React from 'react';
import {navLinks} from "../../utils/routes";
import {NavLink} from "react-router-dom";
import "./style.scss"

const Menu = ({openMenu,onClose}) => {
    return <>
        <div onClick={onClose} className={openMenu ? "nav-bg " :'nav-bg  active' }></div>
        <nav className={openMenu ? "menu-body active" : "menu-body "}>
         <ul className="menu-list">
             {navLinks.map(link => (
                  <li>
                       <NavLink to={link.to}>{link.name}
                           <span className={link.icon}></span>
                       </NavLink>
                  </li>
             ))}
         </ul>
    </nav>
        </>

};

export default Menu;