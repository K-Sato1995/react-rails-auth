import React from "react";
import { Route } from "react-router-dom";
import MessageList from "./MessageList";
import Users from "./Users";
import Home from "./Home";
import CreateUser from "./CreateUser";
import Header from "./Header";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/messages" component={MessageList} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/new" component={CreateUser} />
    </div>
  );
}

export default withAuthenticationRequired(App, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
