import React from 'react';
import style from "./IconItem.module.scss";

const IconItem = (props) => {
    return (
        <div className={style.logoCard}>
            <div className={style.logoItems}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <span>{props.amount}</span>
            <p>{props.text}</p>
        </div>
    );
};

export default IconItem;