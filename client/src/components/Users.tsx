import React from "react";
import { useApi } from "../hooks/useApi";

const Users = () => {
  const opts = {
    audience: "http://localhost3000/api",
    scope: "read:messages",
  };

  const { loading, error, refresh, data } = useApi(
    "http://localhost:3000/auth0/users",
    opts
  );

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Users</h1>
      {console.log(data.data)}
      {data.data.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </div>
  );
};

export default Users;
