import React from "react";
import {connect} from "react-redux";
import PathMenu from "./PathMenu";
import {useLocation, useParams} from 'react-router-dom';


let mapStateToProps = (state) => {
    return {
        menuPage: state.menuPage
    }
}

class PathMenuContainer extends React.Component {
    


    render() {
        let path = this.props.router.params.path;
        switch (path) {
            case "pizza":
                return (
                    <PathMenu {...this.props} path={this.props.menuPage.pizza}/>
                );
            case "drinks":
                return (
                    <PathMenu {...this.props} path={this.props.menuPage.drinks}/>
                );
            case "burgers":
                return (
                    <PathMenu {...this.props} path={this.props.menuPage.burgers}/>
                );
            case "pasta":
                return (
                    <PathMenu {...this.props} path={this.props.menuPage.pasta}/>
                );
        }
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return <Component {...props} router={{location, params}}/>;
    }

    return ComponentWithRouterProp;
}


export default connect(mapStateToProps)(
    withRouter(PathMenuContainer)
);
