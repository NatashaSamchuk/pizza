import React from "react";
import {connect} from "react-redux";
import Blog from "./Blog";


let mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage
    }
}

const BlogContainer = connect(mapStateToProps)(Blog)

export default BlogContainer;