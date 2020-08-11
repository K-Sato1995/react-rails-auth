import React from "react";
import { useApi } from "../hooks/useApi";

const MessageList = () => {
  const opts = {
    audience: "http://localhost3000/api",
    scope: "read:messages",
  };

  const { loading, error, refresh, data } = useApi(
    "http://localhost:3000/messages",
    opts
  );

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>MessageList</h1>
      {data.data.map((message, index) => {
        return <li key={index}>{message.title}</li>;
      })}
    </div>
  );
};

export default MessageList;
