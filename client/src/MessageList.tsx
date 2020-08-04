import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MessageList = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "http://localhost3000/api",
          scope: "read:messages",
        });
        const response = await fetch("http://localhost:3000/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

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
