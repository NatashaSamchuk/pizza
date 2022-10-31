import React from 'react';
import logo from "../../assets/img/pizza-logo.png";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>

                <div className={style.logo__container}>
                    <img src={logo} alt="pizza_icon"/>
                    <h3><span>P</span>izza</h3>
                    <h4>delicious</h4>
                </div>


                <nav>
                    <div className={style.navLinks}>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/home'>Home</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/menu/pizza'>Menu</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/services'>Services</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/blog'>Blog</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/about'>About</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza/contact'>Contact</NavLink>
                    </div>
                </nav>

            </div>
        </header>
    );
};


export default Header;