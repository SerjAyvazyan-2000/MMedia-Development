import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"
import Menu from "../menu/menu";
import logo from  "../../assets/images/logo.png"

const Header = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const handleClick = () => {
         setOpenMenu(!openMenu)
    }
    return <header className="header">
        <div className="header_wrapper">
            <div className="G-container">
                <div className="header_body">
                    <div className="header-logo">
                        <NavLink to={"/home"}>
                            <span className="icon-mmedia-new-logo"></span>
                        </NavLink>
                    </div>

                    <div className="header-menu">
                        <Menu onClose={handleClick} openMenu={openMenu}/>
                    </div>
                    <div className="header_contact">
                        <a className="header_phone" href=""><span className="icon-fa6-solid_phone-1"></span></a>
                        <div onClick={handleClick} className={ openMenu ? "burger-btn active" : "burger-btn"}>
                            <span ></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </header>
};

export default Header;