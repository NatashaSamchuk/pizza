import React from 'react';
import style from "./Services.module.scss";
import a from "../../assets/img/healthy-food-icon.png"
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = (props) => {

    let  servicesItem = props.services.map(item => <ServicesItem key = {item.id} alt = {item.alt} img = {item.img} name = {item.name} text = {item.text}/>)
    return (
        <section id="services" className={`${style.services} ${style.section}`}>
            <h2>Our services</h2>
            <p className={style.servicesText}>Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia,
                there live the blind
                texts.</p>
            <div className={style.servicesContainer}>
                {servicesItem}
            </div>
        </section>
    );
};

export default Services;