import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoggedIn(true);
  };
  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>
    </div>
  );
};

export default LoggedIn;
