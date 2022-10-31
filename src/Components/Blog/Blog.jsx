import React from 'react';
import style from "./Blog.module.scss";
import BlogItem from "./BlogItem";


const Blog = (props) => {
    let blogElements = props.blogPage.blog.map(elem => <BlogItem key={elem.id} img={elem.img} name={elem.name} date={elem.date} text={elem.text} />);
    const headerText = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

    return (
        <section id="blog" className={style.blog}>
            <h2>Recent from blog</h2>
            <p className={style.blog__text}>{headerText}</p>
            <div className={style.blog__container}>
                {blogElements}
            </div>
        </section>
    );
};

export default Blog;