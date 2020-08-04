import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default Home;
