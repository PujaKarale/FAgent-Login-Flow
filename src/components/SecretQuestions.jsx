import { useState, useRef, useEffect } from "react";
import "../styles/SecretQuestions.css";
import "../styles/LoginForm.css"

export default function SecretQuestions({ setIsLoggedIn, user, setKycCompleted }) {
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (user) {
      getQuestionData();
    }
  }, [user]);

  function getInputValue(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue === "") {
      setError(true);
    } else {
      setError(false);

      if (inputValue.toLowerCase() === answer.toLowerCase()) {
        setKycCompleted(true);
      } else {
        setError(true);
      }
    }
  }

  function getQuestionData() {
    if (user && user.questions.length > 0) {
      const randomIndex = genRandomQue(user.questions.length - 1);
      setQuestion(user.questions[randomIndex].question);
      setAnswer(user.questions[randomIndex].answer);
    } else {
      console.log("No questions found for the given email");
    }
  }
  function genRandomQue(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <div className="sq-container">

      <h1>Know Your Customer</h1>
      <form style={{ width: "100%" }} onSubmit={getInputValue} >
        <label htmlFor="secret-question" className="sq-label">
          {question}
        </label>
        <input type="text" className="inputBox" id="secret-question" ref={inputRef} />
        {error && <p style={{ color: "red" }}>Incorrect answer. Please try again.</p>}
        <button type="submit" className="btn">
          OK
        </button>
        <button type="button" className="back-btn" onClick={() => setIsLoggedIn(false)}>
          Go To Login
        </button>
      </form>
    </div>
  );
}






