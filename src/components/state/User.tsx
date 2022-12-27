import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = ({ name, email }: AuthUser) => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "john@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <p>
        {user
          ? `You are logged in as ${user?.name} ${user?.email} `
          : "You are not logged in"}
      </p>
    </div>
  );
};

export default User;
