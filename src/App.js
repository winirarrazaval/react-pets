import React, { Component } from 'react';
import './App.css';
import PetCollection from './components/PetCollection';

class App extends Component {
  render() {
    const pets = [
      {
        name: 'Horace',
        breed: 'Pug',
        age: 12,
        about: ''
      },
      {
        name: 'Stanley',
        breed: 'Springer Spaniel',
        age: 4,
        about: ''
      }
    ];

    return (
      <div className="App">
        <h1>Pets!</h1>
        <p>Welcome to our pets collection. Take a look around to meet our favorite furry friends. </p>
        <PetCollection pets={ pets }/>
      </div>
    );
  }
}

export default App;
