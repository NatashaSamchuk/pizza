import React from 'react';
import style from "./AboutSection.module.scss";
import IconItem from "./IconItem/IconItem";
import PhotoItem from "./PhotoItem/PhotoItem"

const AboutSection = (props) => {
    let iconItem = props.icons.map(item => <IconItem key = {item.id} img={item.img} alt ={item.atl} text ={item.text} amount ={item.amount}/>);
    let photoItem = props.photos.map(item => <PhotoItem key = {item.id} img={item.img} alt ={item.atl}/>);
    return (
        <section className={`${style.about} ${style.section}`}>
            <div className={style.aboutFoto}>
                {photoItem}
            </div>

            <div className={style.fotoDown}>
                <div className={style.containerFotoDown}>
                    <div className={style.fotoDownCard}>
                        <img src={props.photoBackground.img} alt={props.photoBackground.alt}/>
                    </div>
                </div>
                <div className={style.containerLogo}>
                    {iconItem}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;