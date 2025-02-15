// import React from "react";

// export default function Question({ question, option ,handleClick,currentAnswerIndex}) {
//   return (
//     <>
      
//       <h2>{question}</h2>
//       <ul>
//         {option.map((opt, index) => (
//           <li key={index} onClick={()=>handleClick(opt)
//           }    className={currentAnswerIndex === opt ? "selected":" "}>{opt}</li>
//         ))}
//       </ul>
//     </>
//   );
// }



import React from "react";

export default function Question({ question, option, handleClick, currentAnswerIndex }) {
  return (
    <>
      <h2>{question}</h2>
      <ul>
        {option.map((opt, index) => (
          <li
            key={index}
            onClick={() => handleClick(opt)}
            className={currentAnswerIndex === opt ? "selected" : ""}
          >
            {opt}
          </li>
        ))}
      </ul>
    </>
  );
}
