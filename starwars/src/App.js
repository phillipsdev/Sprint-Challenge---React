import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul className="char-grid">
          {this.state.starwarsChars.map((char, i) => {
            return <CharDetails key={i} char={char} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

class CharDetails extends React.Component {
  state = {
    homeworld: null
  };

  render() {
    const { char } = this.props;
    console.log("Character", char[0]);
    return (
      <li className="char">
        <h1>{char.name}</h1>
        <div>Gender: {char.gender}</div>
        <div>Eye color: {char.eye_color}</div>
        <hr />
        {this.state.homeworld !== null ? (
          <div>Homeworld: {this.state.homeworld.name}</div>
        ) : null}
        <hr />
      </li>
    );
  }

  componentDidMount() {
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}
