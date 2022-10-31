import gallery1 from "../assets/img/gallery-1.jpg";
import gallery2 from "../assets/img/gallery-2.jpg";
import gallery3 from "../assets/img/gallery-3.jpg";
import gallery4 from "../assets/img/gallery-4.jpg";
import logo1 from "../assets/img/pizza-logo.png";
import logo2 from "../assets/img/award.png";
import logo3 from "../assets/img/happy-customers.png";
import logo4 from "../assets/img/chef-hat-icon.png";
import bg2 from "../assets/img/bg_2.jpg";
import icon1 from "../assets/img/phone-icon.png";
import icon2 from "../assets/img/loc-icon.png";
import icon3 from "../assets/img/clock-10-16.png";
import img1 from "../assets/img/pngegg.png";
import img2 from "../assets/img/pngfind.com-facebook-icon-white-png-1744532.png";
import img3 from "../assets/img/kindpng_1604933.png";
import img4 from "../assets/img/about.jpg";
import img5 from "../assets/img/pizza-vector.png";






let initialState = {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fugiat optio repellendus temporibus ut? Cumque eligendi, exercitationem facilis nisi numquam provident quaerat quidem quos reiciendis! Animi atque beatae corporis deserunt doloribus eum fuga incidunt iure maxime nam natus necessitatibus nisi, non perspiciatis, placeat quod reiciendis, repellat sed temporibus vitae voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fugiat optio repellendus temporibus ut? Cumque eligendi, exercitationem facilis nisi numquam provident",
        info: [
            {
                id: 1,
                img: icon1,
                alt: "phone-icon",
                text1: "000 (123) 456 7890",
                text2: "A small river named Duden flows"
            },
            {
                id: 2,
                img: icon2,
                alt: "loc-icon",
                text1: "198 West 21th Street",
                text2: "Suite 721 New York NY 10016"
            },
            {
                id: 3,
                img: icon3,
                alt: "clock-icon",
                text1: "Open Monday-Friday",
                text2: "8:00am - 9:00pm"
            }
        ],
        imgs: [
            {
                id: 1,
                img: img1,
                alt: "pngegg"
            },
            {
                id: 2,
                img: img2,
                alt: "pngfind"
            },
            {
                id: 3,
                img: img3,
                alt: "kindpng"
            },
            {
                id: 4,
                img: img4,
                alt: "about"
            },
            {
                id: 5,
                img: img5,
                alt: "pizza-vector"
            }
        ],
        photoBackground: {img: bg2, alt: "bg2"},
        photos: [
            {
                id: 1,
                img: gallery1,
                alt: "gallery1"
            },
            {
                id: 2,
                img: gallery2,
                alt: "gallery2"
            },
            {
                id: 3,
                img: gallery3,
                alt: "gallery3"
            },
            {
                id: 4,
                img: gallery4,
                alt: "gallery4"
            }
            ],
        icons: [
            {
                id: 1,
                img: logo1,
                alt: "pizza-logo",
                amount: 100,
                text: "Pizza Branches",
            },
            {
                id: 2,
                img: logo2,
                alt: "award",
                amount: 85,
                text: "Number of Awards",
            },
            {
                id: 3,
                img: logo3,
                alt: "happy-customers",
                amount: 10.567,
                text: "Happy Customer",
            },
            {
                id: 4,
                img: logo4,
                alt: "chef-hat-icon",
                amount: 900,
                text: "Staff",
            }
        ]
}

const menuReducer = (state = initialState, action) => {
    return state;
}



export default menuReducer;