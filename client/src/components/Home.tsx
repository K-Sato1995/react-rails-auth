import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>email: test1@example.com</li>
        <li>pass: aZ111111</li>
      </ul>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default Home;
