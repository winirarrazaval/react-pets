import React, { Component } from 'react';
import './App.css';
import PetCollection from './components/PetCollection';

const PET_LIST = [
  {
    name: 'Samson',
    breed: 'Alley-Cat',
    age: 15,
    about: 'Samson is Dee\'s owner',
  },
  {
    name: 'Amper',
    breed: 'Tabby',
    age: 6,
    about: 'Amper is Jamie\'s owner',

  },
  {
    name: 'Octo',
    breed: 'Maine Coon',
    age: 3,
    about: 'Octo is Jamie\'s owner',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCollection petList={PET_LIST} />
      </div>
    );
  }
}

export default App;
