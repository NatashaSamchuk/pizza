import React from "react";
import {connect} from "react-redux";
import Services from "./Services"


let mapStateToProps = (state) => {
    return {
        services: state.servicesPage.icons
    }
}


const ServicesContainer = connect(mapStateToProps)(Services)

export default ServicesContainer;
