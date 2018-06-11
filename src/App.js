import React, { Component } from 'react';
import './App.css';
import PetCollection from "./components/PetCollection"

class App extends Component {
  render() {
    const petData = [
      {
        name: "Austral",
        breed: "Cocker",
        age: 5,
        about: "Lived in Pirque"
      },
      {
        name: "Pelantaru",
        breed: "horse",
        age: 10,
        about: "The best horse"
      },
      {
        name: "Jacinta",
        breed: "dog",
        age: 1,
        about: "Whas a beautiful puppy"
      }
    ]
    return (
      <div className="App">
      <PetCollection data={petData}/>
      </div>
    );
  }
}

export default App;
