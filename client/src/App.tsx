import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import MessageList from "./MessageList";
import UnprotectedPage from "./Home";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/messages">MessageList</Link>
      <Route exact path="/" component={UnprotectedPage} />
      <Route path="/messages" component={MessageList} />
    </div>
  );
}

export default withAuthenticationRequired(App, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
