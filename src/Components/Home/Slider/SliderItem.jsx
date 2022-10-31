import React from 'react';
import style from "../Home.module.scss";

const SliderItem = (props) => {
    // console.log(props.text);
    // console.log(props.yellowText);
    // console.log(props.otherText);
    return (
        <div className={style.homeSlide}>
            <div className={style.slide_textContent}>
                <h2><em>{props.yellowText}</em></h2>
                <h1>{props.text}</h1>
                <p>{props.otherText}</p>
                <div className={style.slideBtns}>
                    <button className={style.btnOrder}>Order Now</button>
                    <button className={style.btnView}>View Menu</button>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;