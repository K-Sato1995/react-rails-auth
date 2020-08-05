import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import MessageList from "./MessageList";
import Users from "./Users";
import Home from "./Home";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/messages">MessageList</Link> |{" "}
      <Link to="/users">Users</Link>
      <Route exact path="/" component={Home} />
      <Route path="/messages" component={MessageList} />
      <Route exact path="/users" component={Users} />
    </div>
  );
}

export default withAuthenticationRequired(App, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
