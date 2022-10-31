import React from "react";
import {connect} from "react-redux";
import In from "./AboutInfo";
import AboutInfo from "./AboutInfo";


let mapStateToProps = (state) => {
    return {
        imgs: state.aboutPage.imgs,
        info: state.aboutPage.info,
        text: state.aboutPage.text
    }
}

const HomeContainer = connect(mapStateToProps)(AboutInfo)

export default HomeContainer;

