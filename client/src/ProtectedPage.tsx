import React from "react";
type User = {
  email: string;
};

interface Props {
  user: User;
}

const ProtectedPage = ({ user }: Props) => {
  return (
    <div>
      <h1>This page is protected.</h1>
      <h2>This is your email !!! => {user.email}</h2>
    </div>
  );
};

export default ProtectedPage;
