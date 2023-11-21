// FOR CLASS COMPONENTS
//import { Component } from "react";

import Card from "../card/card.components";
import './card-list.styles.css';

// FUNCTINAL COMPONETS
const CardList = ({monsters})=>(
    <div className='card-list' >
        {monsters.map(monster=> {
            return(
                <Card monster={monster} key={monsters.id}/>
            ) 
        })}
    </div>
)


// CLASS COMPONENTS
// class CardList extends Component {
//     render(){
//         const {monsters}= this.props;

//         return (
//             <div className='card-list' >
//                 {monsters.map(monster=> {
//                     return(
//                         <Card monster={monster} key={monsters.id}/>
//                     ) 
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;