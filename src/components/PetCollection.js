import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: props.petList,
    };
  }

  generatePetList = () => {
    return this.state.petList.map((pet) => {
      return (
        <Pet
          key={pet.name}
          name={pet.name}
          age={pet.age}
          about={pet.about}
          breed={pet.breed}
          />
      )
    });
  }

  addPet = (pet) => {
    const pets = this.state.petList;
    pets.push(pet);
    this.setState({
      petList: pets,
    });
  }

  render() {
    return (
      <main>
        {this.generatePetList()}
        <NewPetForm submitHandler={this.addPet} />
      </main>
    )
  }

}

PetCollection.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    about: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  })),
}

export default PetCollection;
