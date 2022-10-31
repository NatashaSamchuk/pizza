import React from 'react';
import style from "./PhotoItem.module.scss";

const PhotoItem = (props) => {
    return (
        <div className={style.fotoCard}>
            <img src={props.img} alt={props.alt}/>
        </div>
    );
};

export default PhotoItem;