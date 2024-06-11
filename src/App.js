// import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { UserProvider } from "./Context";


export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <div className="App">
        <LoginForm />
      </div>
    </UserProvider>
  );
}







