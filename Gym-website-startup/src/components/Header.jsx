import React from "React";
import "../styles/header.css";
import logo from "../assets/img/dumble.png";


const Header =() => {
    return<header>
        <div className="container">
            <div className="nav__wrapper">
                {/* /*logo\* */}
                <div className="logo">
                    <div className="logo__img"><img src={logo} alt=""/></div>
                    <h2>FitPeanut</h2>
                </div> 
            </div>
        </div>
    </header>
}
export default Header