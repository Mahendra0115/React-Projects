// import React, { useState } from "react";
// import Question from "./Question";
// import "./Style.css";

// export default function Quiz() {
//   const Ques = [
//     {
//       question: "What is the addition of 2x2?",
//       option: ["5", "2", "4", "8"],
//       ans: "4",
//     },
//     {
//       question: "What is 10 divided by 2?",
//       option: ["2", "5", "10", "20"],
//       ans: "5",
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);
//   const [score, setScore] = useState(0);

//   const handleClick = (opt) => {
//     setCurrentAnswerIndex(opt);
//     if (opt === Ques[currentQuestionIndex].ans) {
//       setScore(score + 1);
//     }
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1); // ✅ Corrected state update
//     setCurrentAnswerIndex(null);
//   };

//   return (
//     <>
//       {currentQuestionIndex < Ques.length ? (
//         <div>
//           <Question
//             question={Ques[currentQuestionIndex].question}
//             option={Ques[currentQuestionIndex].option}
//             handleClick={handleClick}
//             currentAnswerIndex={currentAnswerIndex}
//           />

//           <button
//             disabled={currentAnswerIndex === null}
//             className={currentAnswerIndex === null ? "button-disable" : "button"}
//             onClick={handleNextQuestion}
//           >
//             Next Question
//           </button>
//         </div>
//       ) : (
//         <div>Your Score is {score}</div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import Question from "./Question";
import Results from "./Results";
import "./Style.css";

export default function Quiz() {
  const Ques = [
    { question: "Which of these is used to define a constant in Java?", option: ["const", "final", "static", "var"], ans: "final" },
    { question: "Which keyword is used to inherit a class in Java?", option: ["super", "this", "extends", "implements"], ans: "extends" },
    { question: "Which data type is used to store decimal values in Java?", option: ["int", "float", "char", "boolean"], ans: "float" },
    { question: "Which of these access modifiers allows access only within the same package?", option: ["private", "protected", "default", "public"], ans: "default" },
    { question: "What will be the output of `System.out.println(10/3);`?", option: ["3.33", "3", "3.0", "Error"], ans: "3" },
    { question: "Which of these is NOT a Java feature?", option: ["Platform-independent", "Dynamic Binding", "Multiple Inheritance", "Robust"], ans: "Multiple Inheritance" },
    { question: "What is the size of an `int` in Java?", option: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"], ans: "4 bytes" },
    { question: "Which of these is a superclass of every Java class?", option: ["Object", "Class", "Super", "Base"], ans: "Object" },
    { question: "Which function is used to compare two strings in Java?", option: ["equals()", "==", "compareTo()", "strCompare()"], ans: "equals()" },
    { question: "What will be the output of `10 + 20 + 'Hello' + 30 + 40`?", option: ["30Hello3040", "10 + 20Hello3040", "30Hello30Hello40", "Error"], ans: "30Hello3040" },

//     { question: "What is the sum of the first 10 natural numbers?", option: ["50", "55", "60", "65"], ans: "55" },
// { question: "A train of length 100m crosses a bridge of 200m in 30 seconds. What is its speed?", option: ["10 m/s", "15 m/s", "20 m/s", "30 m/s"], ans: "10 m/s" },
// { question: "What is 45% of 200?", option: ["80", "90", "100", "110"], ans: "90" },
// { question: "If the average of five numbers is 20, what is their sum?", option: ["80", "100", "120", "140"], ans: "100" },
// { question: "What is the missing number in the sequence? 2, 6, 12, 20, __, 42", option: ["28", "30", "32", "34"], ans: "30" },
// { question: "A shopkeeper gives a 10% discount on a product priced at ₹500. What is the final price?", option: ["₹400", "₹450", "₹480", "₹490"], ans: "₹450" },
// { question: "If the perimeter of a square is 32 cm, what is the area?", option: ["16 cm²", "64 cm²", "32 cm²", "128 cm²"], ans: "64 cm²" },
// { question: "The average of three numbers is 27. If two numbers are 25 and 30, what is the third number?", option: ["26", "27", "28", "29"], ans: "26" },
// { question: "If a car travels 150 km in 3 hours, what is its speed?", option: ["40 km/h", "45 km/h", "50 km/h", "60 km/h"], ans: "50 km/h" },
// { question: "What is the square root of 144?", option: ["10", "11", "12", "14"], ans: "12" },

// { question: "If A = 1, B = 2, C = 3, what is the sum of the positions of the letters in 'CAT'?", option: ["24", "20", "21", "22"], ans: "24" },
// { question: "Which word does NOT belong to the group? Apple, Banana, Mango, Carrot", option: ["Apple", "Banana", "Mango", "Carrot"], ans: "Carrot" },
// { question: "If 'PENCIL' is written as 'TNEMHS', how is 'RULER' written?", option: ["SURMS", "TULFT", "TULMS", "SURMS"], ans: "TULMS" },
// { question: "Find the missing number: 5, 10, 20, 40, __, 160", option: ["60", "80", "100", "120"], ans: "80" },
// { question: "If A is the brother of B and B is the sister of C, what is the relation of A to C?", option: ["Brother", "Sister", "Father", "Uncle"], ans: "Brother" },
// { question: "Which number will replace the question mark in the series? 3, 6, 9, ?, 15", option: ["10", "12", "11", "13"], ans: "12" },
// { question: "A clock shows 3:15. What is the angle between the hour and minute hands?", option: ["37.5°", "45°", "52.5°", "60°"], ans: "37.5°" },
// { question: "If 'LAMP' is coded as 'NCOQ', how is 'FAN' coded?", option: ["HBP", "GBQ", "ICR", "JDT"], ans: "HBP" },
// { question: "In a family, A is the mother of B, C is the brother of B, and D is the father of C. Who is D to A?", option: ["Husband", "Father", "Son", "Uncle"], ans: "Husband" },
// { question: "If in a certain code, 'ROAD' is written as 'URDG', how is 'FIRM' written?", option: ["IKUQ", "ILUQ", "ILVQ", "IMVQ"], ans: "ILUQ" },


  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleClick = (opt) => {
    setCurrentAnswerIndex(opt);
  };

  const handleNextQuestion = () => {
    if (currentAnswerIndex === Ques[currentQuestionIndex].ans) {
      setScore(score + 1);
      setCorrectAnswers([...correctAnswers, Ques[currentQuestionIndex]]);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        { ...Ques[currentQuestionIndex], userAns: currentAnswerIndex },
      ]);
    }

    setCurrentAnswerIndex(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswerIndex(null); // Reset selected answer when going back
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      {!submitted ? (
        currentQuestionIndex < Ques.length ? (
          <div>
            <Question
              question={Ques[currentQuestionIndex].question}
              option={Ques[currentQuestionIndex].option}
              handleClick={handleClick}
              currentAnswerIndex={currentAnswerIndex}
            />
            <div>
              <button
                disabled={currentQuestionIndex === 0}
                className={currentQuestionIndex === 0 ? "button-disable" : "button"}
                onClick={handlePreviousQuestion}
              >
                Back
              </button>
              <button
                disabled={currentAnswerIndex === null}
                className={currentAnswerIndex === null ? "button-disable" : "button"}
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex === Ques.length - 1 ? "Submit" : "Next Question"}
              </button>
            </div>
          </div>
        ) : (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )
      ) : (
        <Results correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} score={score} />
      )}
    </div>
  );
}
