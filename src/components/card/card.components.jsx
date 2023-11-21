// FOR CLASS COMPONENTS
//import { Component } from "react";

import './card.styles.css'

// FUNCTINAL COMPONETS
const Card = ({monster: {name,email,id}})=>{   
    //const {name,email,id}= monster;

    return (
        <div className='card-container' key={id}>
            <img 
                alt={`monster ${name}`}    
                src= {`https://robohash.org/${id}?set=set2&size=180x180`}
                />
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    )
}

// CLASS COMPONENTS
// class Card extends Component{
//     render(){
//         const {name,email,id}= this.props.monster;

//         return (
//             <div className='card-container' key={id}>
//                 <img 
//                     alt={`monster ${name}`}    
//                     src= {`https://robohash.org/${id}?set=set2&size=180x180`}
//                     />
//                 <h3>{name}</h3>
//                 <h3>{email}</h3>
//             </div>
//         )    
//     }
// }


export default Card;