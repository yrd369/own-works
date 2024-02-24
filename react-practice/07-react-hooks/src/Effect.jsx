// import { useState } from "react";

// const Effect = () => {
//   const [person, setPerson] = useState([{ name: "akalya", age: 21 }]);

//   const handleName = (e) => {
//     setPerson((p) => [...p,e.target.value]);
//   };
//   console.log(person);
//   return (
//     <>
//       <div>
//         <ul className="mx-auto">
//           {person.map((val, index) => {
//             return (
//               <li key={index}>
//                 {val.name}
//                 {val.age}
//               </li>
//             );
//           })}
//         </ul>
//         <input
//           value={person.name}
//           className="bg-gray-200 px-4 py-1 m-10"
//           onClick={handleName}
//         />
//         <button className="bg-gray-200 px-4 py-1">Click</button>
//       </div>
//     </>
//   );
// };
// useState()
// useEffect()
// useContext()
// useRef()
export default Effect;
