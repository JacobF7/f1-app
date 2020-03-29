import React, { Component } from "react";

class Driver extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-4">
        <div className="card-header">
          Driver #{this.props.driver.id}
          <button
            className="badge badge-pill badge-danger m-2"
            onClick={this.props.onDelete}
          >
            -
          </button>
        </div>
        <div className="card-body">
          <h5>{this.props.driver.name}</h5>
          Wins
          <span className="badge badge-pill badge-primary m-2">
            {this.props.driver.wins}
          </span>
          <button
            className="badge badge-pill badge-success m-2"
            onClick={this.props.onIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Driver;
