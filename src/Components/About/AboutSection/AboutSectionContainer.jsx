import React from "react";
import {connect} from "react-redux";
import AboutSection from "./AboutSection";


let mapStateToProps = (state) => {
    return {
        photos: state.aboutPage.photos,
        icons: state.aboutPage.icons,
        photoBackground: state.aboutPage.photoBackground
    }
}

const HomeContainer = connect(mapStateToProps)(AboutSection)

export default HomeContainer;

