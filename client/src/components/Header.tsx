import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/messages">MessageList</Link> |{" "}
      <Link to="/users">Users</Link> | <Link to="/users/new">New User</Link>
    </>
  );
};

export default Header;
