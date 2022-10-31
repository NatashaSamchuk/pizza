import React from 'react';
import style from "./Home.module.scss";
import SliderItem from "./Slider/SliderItem";

const Home = (props) => {
    let sliderItem = props.homePage.sliderText.map(elem => <SliderItem key={elem.id} id={elem.id} yellowText={elem.yellowText} text={elem.text} otherText={elem.otherText} backgroundImg={elem.backgroundImg}/>)
    return (
        <section id="home" >
                        {sliderItem}
        </section>
    );
}

export default Home;