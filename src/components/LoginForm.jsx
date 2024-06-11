import "../styles/LoginForm.css";
import { useState, useRef } from "react";
import { userData } from "../userData";
import WelcomePage from "./WelcomePage";
import SecretQuestions from "./SecretQuestions";
import { Context } from "../Context";
import { useContext } from "react";

export default function LoginForm() {
  // const[user,setUser]=useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [kycCompleted, setKycCompleted] = useState(false);
  const { isLoggedIn, setIsLoggedIn, kycCompleted, setKycCompleted, setUser, user } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  const textInput = useRef();
  console.log(textInput.current, '*************')

  const getInputValue = (event) => {
    event.preventDefault();
    const inputValue = textInput.current.value;
    console.log(inputValue);

    const emailRegExPattern = /^[^\s@#$%&*+/=?^`{|}~]+@[^\s@#$%&*+/=?^`{|}~]+\.[^\s@#$%&*+/=?^`{|}~]+$/;
    const phoneNoRegExPattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    if (emailRegExPattern.test(inputValue)) {
      let userDetail = userData.find((ele) => ele.email === inputValue);

      if (userDetail) {
        setUser(userDetail);
        setIsLoggedIn(true);
        setErrorMessage("");
      } else {
        setErrorMessage("User not found");
      }
    } else if (phoneNoRegExPattern.test(inputValue)) {
      const digits = inputValue.length;
      if (digits !== 10) {
        setErrorMessage("Invalid Phone Number");
      } else {
        setErrorMessage("");
        setIsLoggedIn(true);
      }
    } else {
      setErrorMessage("Invalid Email or Phone Number");
    }

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const handleClear = () => {
    setErrorMessage("");
    textInput.current.value = "";
  };

  return (
    <div className="login-container">
      {isLoggedIn && kycCompleted ? (
        <WelcomePage />
      ) : isLoggedIn && !kycCompleted ? (
        <SecretQuestions setKycCompleted={setKycCompleted} setIsLoggedIn={setIsLoggedIn} user={user} />
      ) : (
        <>
          <h1 className="login-title">LOGIN</h1>
          <form className="login-form" onSubmit={getInputValue}>
            <label className="login-label">
              Enter email ID/Phone No:
              <input
                className={`login-input ${errorMessage ? "input-error" : ""}`}
                ref={textInput}
                type="text"
                name="email ID/Phone No"
                required
              />
              {errorMessage ? (
                <p className="error-message">{errorMessage}</p>
              ) : (
                <div className="empty-error-container"></div>
              )}
            </label>
            <div className="login-buttons">
              <button className="login-button" type="submit">
                Next
              </button>
              <button className="login-button" type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}



