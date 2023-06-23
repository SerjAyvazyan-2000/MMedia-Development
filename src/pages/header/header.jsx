import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"
import Menu from "../menu/menu";
import logo from  "../../assets/images/logo.png"

const Header = () => {
    return <header className="header">
        <div className="header_wrapper">
            <div className="G-container">
                <div className="header_body">
                    {/*<div className="header-logo">*/}
                    {/*    <NavLink>*/}
                    {/*        <img src={logo} alt=""/>*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}

                    <div className="header-menu">
                        <Menu/>
                    </div>

                </div>
            </div>
        </div>

    </header>
};

export default Header;