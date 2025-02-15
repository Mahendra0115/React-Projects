import React from "react";
import "./Style.css";

export default function Results({ correctAnswers, wrongAnswers, score }) {
  return (
    <div className="results-container">
      <h2>Your Score: {score}</h2>

      <div className="correct-answers">
        <h3>✅ Correct Answers</h3>
        <ul>
          {correctAnswers.map((q, index) => (
            <li key={index}>
              <strong>{q.question}</strong> - {q.ans}
            </li>
          ))}
        </ul>
      </div>

      <div className="wrong-answers">
        <h3>❌ Incorrect Answers</h3>
        <ul>
          {wrongAnswers.map((q, index) => (
            <li key={index}>
              <strong>{q.question}</strong> - Your Answer: <span className="wrong">{q.userAns}</span>,
              Correct Answer: <span className="correct">{q.ans}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
