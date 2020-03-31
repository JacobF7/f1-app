import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Welcome to F1!</h1>
        <p class="lead">
          This is a playground React Application made by Jacob Falzon.
        </p>
        <hr class="my-4" />
        <p>Formula One World Championship Limited</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
