import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CreateUser = () => {
  const [email, setEmail] = React.useState<string>("");
  const { getAccessTokenSilently } = useAuth0();

  const opts = {
    audience: "http://localhost3000/api",
    scope: "read:messages",
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  };

  const createUser = async (opts) => {
    const { audience, scope, ...fetchOptions } = opts;
    const accessToken = await getAccessTokenSilently({ audience, scope });
    const res = fetch("http://localhost:3000/auth0/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      ...fetchOptions,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Create a new User</h1>
      <p>email: {email}</p>
      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createUser(opts);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateUser;
