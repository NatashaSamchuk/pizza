import React from 'react';
import style from "./Menu.module.scss";
import about from "../../assets/img/about.jpg";
import {NavLink} from "react-router-dom";
import PathMenuContainer from "./PathMenu/PathMenuContainer";

const Menu = () => {
    return (
        <section className={style.allMenu}>
            <div className={style.allMenuImg}>
                <img src={about} alt="about"/>
            </div>
            <div className={style.allMenuMain}>
                <div className={style.mainNav}>
                    <NavLink to="/pizza/menu/pizza" className = { navData => navData.isActive ? style.menuNavActiv : style.menuNav }>Pizza</NavLink>
                    <NavLink to="/pizza/menu/drinks" className = { navData => navData.isActive ? style.menuNavActiv : style.menuNav }>Drinks</NavLink>
                    <NavLink to="/pizza/menu/burgers" className = { navData => navData.isActive ? style.menuNavActiv : style.menuNav }>Burgers</NavLink>
                    <NavLink to="/pizza/menu/pasta" className = { navData => navData.isActive ? style.menuNavActiv : style.menuNav }>Pasta</NavLink>
                </div>
                <PathMenuContainer/>
            </div>
        </section>
    );
};

export default Menu;