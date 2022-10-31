import React from 'react';
import style from "./ServicesItem.module.scss";


const ServicesItem = (props) => {
    return (
                <div className={style.servicesItem}>
                    <div className={style.servicesImg}>
                        <img src={props.img} alt={props.alt}/>
                    </div>
                    <div className={style.servicesDescription}>
                        <h3>{props.name}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
    );
};

export default ServicesItem;