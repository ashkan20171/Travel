import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
function Carditem(props) {
    const{path, label, src} = props
    return (
        <li className="cards__item">
           <link className="cards__item__link" to={path}>
               <figure className="cards__item__pic__wrap" data-category={label}>
                   <image src={src} alt={src} className="cards__item__img" />
               </figure>
           </link>
        </li>
    )
}

export default Carditem
