import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  constructor(props) {
    super();

    // set state to the static data from props
    // I want the pet collection to be the one who manages the data so that is why we set the state to the data we had in the App.js
    this.state = {
      pets: props.data
    }
  }

//callback function to bring the pets from the form
addPet = (pet) => {
  let updatedPets = this.state.pets;
  updatedPets.push(pet);

  this.setState({pets: updatedPets})
}


  render(){
    const pets = this.state.pets.map((pet, index) => {
      return <Pet key={index}
        name = {pet.name}
        breed = {pet.breed}
        age= {pet.age}
        about={ pet.about}
        />
    }
  );
    return (
      <section>
        <table>
          <tbody>
            <tr>
              <th>
              Name
              </th>
              <th>
              Breed
              </th>
              <th>
              Age
              </th>
              <th>
              About
              </th>
            </tr>
            {pets}
          </tbody>
          </table>
          <NewPetForm addPetCallback={this.addPet}/>
      </section>
    );
  }
}

export default PetCollection;
