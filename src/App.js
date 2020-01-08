import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein"
        },
        {
          name: "Dracula"
        },
        {
          name: "Zombie"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
