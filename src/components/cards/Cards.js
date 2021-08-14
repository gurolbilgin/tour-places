import React from 'react'
import { data } from "../../helper/Data"
import './Cards.css'

function Cards() {
  return (
    <div className="card-container">
      {data.map( card => 
      <div className="cards">
        <div className="title">
          <h2>{card.title}</h2>
        </div>
        <img src={card.image} alt={card.title} />
        <div className="card-over">
          <p>{card.desc}</p>
        </div>
      </div>  
      )}    
    </div>
  )
}

export default Cards



// - - - - - - - - using useState to make changes

// import React, { useState } from "react";
// import { data } from "../../helper/Data";
// import "./Card.css";

// const Card = () => {
//   const [showImage, setShowImage] = useState(false);

//   return (
//     <div className="card-container" onClick={() => setShowImage(!showImage)}>
//       {showImage ? (
//         <>
//           {data.map((card) => {
//             return (
//               <div className="cards">
//                 <img src={card.image} />
//               </div>
//             );
//           })}
//         </>
//       ) : (
//         <>
//           {data.map((card) => {
//             return (
//               <div className="cards">
//                 <div className="title">
//                   <h2>{card.title}</h2>
//                 </div>
//                 <img src={card.image} alt={card.title} />

//                 <div className="card-over">
//                   <p>{card.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </>
//       )}
//     </div>
//   );
// };

// export default Card;


// cody's code
// function Card() {
//   return (
//     <div className="card-container">
//       {data.map((card) => {
//         return (
//           <div className="cards">
//             <div className="title">
//               <h2>{card.title}</h2>
//             </div>
//             <img src={card.image} alt={card.title} />
//             <div className="card-over">
//               <p>{card.desc}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Card;