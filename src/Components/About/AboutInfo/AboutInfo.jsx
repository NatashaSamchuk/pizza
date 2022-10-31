import React from 'react';
import style from "./AboutInfo.module.scss"
import InfoItem from "./InfoItem/InfoItem";

const AboutInfo = (props) => {
    let imfoIten = props.info.map(item => <InfoItem key ={item.id} img ={item.img} alt ={item.alt} text1 ={item.text1} text2 ={item.text2}/>)
    return (
        <section className={style.infoSection}>
            <div className={style.infoContainer}>
                <div className={style.contactInfo}>
                    {imfoIten}
                    <div className={style.socialIcons}>
                        <div className={style.socialItems}>
                            <img src={props.imgs[0].img} alt={props.imgs[0].alt}/>
                            <img src={props.imgs[1].img} alt={props.imgs[1].alt}/>
                            <img src={props.imgs[2].img} alt={props.imgs[2].alt}/>
                        </div>
                    </div>
                </div>
                <div className={style.welcome}>
                    <div>
                        <img src={props.imgs[3].img} alt={props.imgs[3].alt}/>
                    </div>

                    <div>
                        <h2>Welcome to<i>
                            <img src={props.imgs[4].img} alt={props.imgs[4].alt}/>
                        </i><span>pizza</span> a restaurant
                        </h2>

                        <p>{props.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;