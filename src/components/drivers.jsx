import React, { Component } from "react";
import Driver from "./driver";

class Drivers extends Component {
  state = {
    drivers: [{ id: Date.now(), name: "Seb Vettel", wins: 0 }],
    newDriverName: ""
  };

  onDelete = driverId => {
    const drivers = this.state.drivers.filter(driver => driver.id !== driverId);
    this.setState({ drivers: drivers });
  };

  onNewDriverName = event => {
    this.setState({ newDriverName: event.target.value });
  };

  onAdd = () => {
    const drivers = [
      ...this.state.drivers,
      { id: Date.now(), name: this.state.newDriverName, wins: 0 }
    ];

    this.setState({ drivers: drivers, newDriverName: "" });
  };

  onIncrement = driverId => {
    const drivers = this.state.drivers.map(driver => {
      if (driver.id === driverId) {
        return { id: driver.id, name: driver.name, wins: driver.wins + 1 };
      }

      return driver;
    });

    this.setState({ drivers: drivers });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="New Driver Name"
          value={this.state.newDriverName}
          onChange={event => this.onNewDriverName(event)}
        ></input>
        <button
          className="badge badge-pill badge-success m-2"
          onClick={() => this.onAdd()}
        >
          +
        </button>
        <div>
          {this.state.drivers.map(driver => (
            <Driver
              key={driver.id}
              driver={driver}
              onDelete={() => this.onDelete(driver.id)}
              onIncrement={() => this.onIncrement(driver.id)}
            ></Driver>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Drivers;
