
import img1 from "../assets/img/image_1.jpg";
import img2 from "../assets/img/image_2.jpg";
import img3 from "../assets/img/image_3.jpg";

let initialState = {

    blog: [
        {
            id: 1,
            img: img1,
            date: "Sept 10,2022  Admin",
            name: "Crunchy Italian Pizza",
            text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",

        },
        {
            id: 2,
            img: img2,
            date: "Oct 24,2022  Admin",
            name: "Classic Mozarella Pizza",
            text: "A small river named Duden flowws by their place and supplies it with the necessary regelialia.",
        },
        {
            id: 3,
            img: img3,
            date: "Sept 17,2022  Admin",
            name: "Delicious Greek Pizza",
            text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",

        }
    ]
}

const blogReducer = (state = initialState) => {
    return state;
}



export default blogReducer;



