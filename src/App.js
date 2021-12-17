import React from "react";
import Button from "./Button";
import Navigation from "./Layouts/Navigation";
import Footer from "./Layouts/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: 0,
    };
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navigation} />

        <h1>{this.state.changeValue}</h1>
        <Button name={`UP`} />
        <Button name={`DOWN`} />

        <Route path="/" component={Footer} />
      </div>
    );
  }
}
export default App;
