import icon1 from "../assets/img/healthy-food-icon.png";
import icon2 from "../assets/img/foodDeliveryIcon.png";
import icon3 from "../assets/img/yellow-pizza-icon-black.png";



let initialState = {
        icons: [
            {
                id: 1,
                img: icon1,
                alt: icon1,
                name: "Healthy foods",
                text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            },
            {
                id: 2,
                img: icon2,
                alt: icon2,
                name: "Fastest delivery",
                text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            },
            {
                id: 3,
                img: icon3,
                alt: icon3,
                name: "Original recipes",
                text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            }
        ]
}

const servicesReducer = (state = initialState, action) => {
    return state;
}



export default servicesReducer;