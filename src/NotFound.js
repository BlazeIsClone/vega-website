import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import ChargeNetInfo from "./home/ChargeNetInfo";

class NotFound extends React.Component {
  render() {
    return (
      <section>
        <h1>STATUS 404</h1>
      </section>
    );
  }
}
export default NotFound;
