import about from "../assets/img/about.jpg";
import pizza1 from "../assets/img/pizza-1.jpg";
import pizza2 from "../assets/img/pizza-2.jpg";
import pizza3 from "../assets/img/pizza-3.jpg";
import drink1 from "../assets/img/drink-1.jpg";
import drink2 from "../assets/img/drink-2.jpg";
import drink3 from "../assets/img/drink-3.jpg";
import burger1 from "../assets/img/burger-1.jpeg";
import burger2 from "../assets/img/burger-2.jpeg";
import burger3 from "../assets/img/burger-3.jpeg";
import pasta1 from "../assets/img/pasta-1.jpg";
import pasta2 from "../assets/img/pasta-2.jpg";
import pasta3 from "../assets/img/pasta-3.jpg";



let initialState = {
        photoAbout: about,

        pizza: [
            {
                id: 1,
                img: pizza1,
                alt: "pizza1",
                name: "Italian Pizza",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 20.00
            },
            {
                id: 2,
                img: pizza2,
                alt: "pizza2",
                name: "Hawalian Pizza",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 29.00
            },
            {
                id: 3,
                img: pizza3,
                alt: "pizza3",
                name: "Greek Pizza",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 20.00
            }
        ],
        drinks: [
            {
                id: 1,
                img: drink1,
                alt: "drink1",
                name: "Cold Tea",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 3.90
            },
            {
                id: 2,
                img: drink2,
                alt: "drink2",
                name: "Cherry Cocktail",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 4.90
            },
            {
                id: 3,
                img: drink3,
                alt: "drink3",
                name: "Orange Cocktail",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 2.90
            }
        ],
        burgers: [
            {
                id: 1,
                img: burger1,
                alt: "burger1",
                name: "Texas Burger",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 5.90
            },
            {
                id: 2,
                img: burger2,
                alt: "burger2",
                name: "Burger BBQ",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 4.90
            },
            {
                id: 3,
                img: burger3,
                alt: "burger3",
                name: "Beef Burger",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 6.90
            }
        ],
        pasta: [
            {
                id: 1,
                img: pasta1,
                alt: "pasta1",
                name: "Pasta Carbonara",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 5.90
            },
            {
                id: 2,
                img: pasta2,
                alt: "pasta2",
                name: "Italian Pasta",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 4.90
            },
            {
                id: 3,
                img: pasta3,
                alt: "pasta3",
                name: "Pasta Bolognese",
                text: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia",
                price: 6.90
            }
        ],
}

const menuReducer = (state = initialState, action) => {
    return state;
}



export default menuReducer;