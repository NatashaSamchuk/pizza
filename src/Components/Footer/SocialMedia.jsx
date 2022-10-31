import React from 'react';
import twitter from "../../assets/img/twitter-icon.png";
import fb from "../../assets/img/fb-icon.png";
import insta from "../../assets/img/insta-icon.png";
import style from "./Footer.module.scss";

const SocialMedia = () => {

    return (
        <div className={style.footer__socialMedia}>
            <a href="https://twitter.com/home?lang=uk"><img src={twitter} alt="twitter"/></a>
            <a href="https://uk-ua.facebook.com/"><img src={fb} alt="facebook"/></a>
            <a href="https://www.instagram.com/"><img src={insta} alt="instagram"/></a>
        </div>
    );
};

export default SocialMedia;