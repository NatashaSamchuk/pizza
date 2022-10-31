import {combineReducers, createStore} from "redux";
import menuReduser from "./menuReduser";
import servicesReduser from "./servicesReduser";
import homeReducer from "./homeReducer";
import aboutReduser from "./aboutReduser";
import blogReducer from "./blogReducer"



//state как обьект, параметры состояния, редакс создаст обьект состояния как был state, у него будут свойства и методы, которые мы передадим
let reducers = combineReducers({

    homePage: homeReducer,
    menuPage: menuReduser,
    servicesPage: servicesReduser,
    aboutPage: aboutReduser,
    blogPage: blogReducer

});

let store = createStore(reducers);

export default store;