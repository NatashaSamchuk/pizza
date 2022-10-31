import style from "./Blog.module.scss";
import React from "react";

const BlogItem = (props) => {
    return (
        <div className={style.blog__item}>
            <div className={style.blog__img}>
                <img src={props.img} alt="pasta_and_beer"/>
            </div>
            <div className={style.blog__description}>
                <p>{props.date}<span className={style.comments}><i
                    className="fa-solid fa-comment-dots">10</i></span></p>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default BlogItem;