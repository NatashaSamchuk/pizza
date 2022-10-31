import React from 'react';
import style from "./PathMenu.module.scss";
import MenuItem from "./MenuItem/MenuItem";


const PathMenu = (props) => {

    let pathItem = props.path.map(item => <MenuItem key = {item.id}  img = {item.img} alt = {item.alt} name = {item.name} text = {item.text} price = {item.price}/>)
    return (
        <div className={style.productContainer}>
            {pathItem}
        </div>
    )
}


export default PathMenu;