import React from 'react';
import style from "./MenuItem.module.scss";


const MenuItem = (props) => {
    return (
        <div className={style.productItem}>
            <div className={style.itemImg}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className={style.itemDescription}>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
                <div className={style.descriptionFlexContainer}>
                    <span>${props.price}</span>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export default MenuItem;