import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {
  static propTypes = {
    pets: PropTypes.array.isRequired
  };

  constructor(props) {
    super();

    this.state = { pets: props.pets };
  }

  addPet = (petInfo) => {
    let updatedPets = this.state.pets;
    updatedPets.push(petInfo);

    this.setState({ pets: updatedPets});
  }

  render() {
    const petComponents = this.state.pets.map((pet, index) => {
      return <Pet key={ index }
        name={ pet.name }
        breed={ pet.breed }
        age={ pet.age }
        about={ pet.about }
        />
    });

    return (
      <section className="pets">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
              <th>About</th>
            </tr>
            { petComponents }
          </tbody>
        </table>

        <NewPetForm addPetCallback={ this.addPet } />
      </section>
    );
  }
}

export default PetCollection;
