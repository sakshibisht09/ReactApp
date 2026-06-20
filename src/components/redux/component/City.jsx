// import React from 'react';
// import { useState, useRef } from 'react';
// import './Multi.css';
// import { useDispatch } from 'react-redux';

// function City() {

//     let inputRef =  useRef(null);
//     let cityRef = useRef(null);
//     let dispatch = useDispatch();

//     let getData = ()=>{
//         let actionObj = {
//             type : "NAME",
//             nameObj : inputRef.current.value,
//             cityObj : cityRef.current.value
//         }
//         dispatch(actionObj)
//     }


//     return(
//         <div className='mainCity'>
//             <div className='cityPerson'>
//                 <h1>Name</h1>
//                 <input type="text" placeholder='Enter your name' 
                
//                 ref={inputRef}
//                 />
//             </div>

//             <div className='city'>
//                 <h1>City </h1>
//                 <select
//                 ref={cityRef}>
//                     <option value="Mumbai">Mumbai</option>
//                     <option value="New Delhi">New Delhi</option>
//                     <option value="Noida">Noida</option>
//                     <option value="Pune">Pune</option>
//                     <option value="Bangalore">Bangalore</option>
//                 </select>
//             </div>
//             <button onClick={getData}>
//                 Send
//             </button>
            

//         </div>
//     )
// }

// export default City;



// function City(){


//     return(
//         <div>
//             <h1>name</h1>
//             <input type="text" placeholder="enter name"  />
//         </div>
//     )
// }