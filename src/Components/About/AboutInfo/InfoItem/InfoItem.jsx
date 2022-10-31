import React from 'react';
import style from "./InfoItem.module.scss";

const InfoItem = (props) => {
    return (
        <div className={style.contactItems}>
            <img src={props.img} alt={props.alt}/>
            <h3>{props.text1}</h3>
            <p>{props.text2}</p>
        </div>
    );
};

export default InfoItem;