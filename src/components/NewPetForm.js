import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPetForm extends Component {
  static propTypes = {
    addPetCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      name: '',
      breed: '',
      age: '',
      about: ''
    };
  }

  onInputChange = (event) => {
    const newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  resetState = () => {
    this.setState({
      name: '',
      breed: '',
      age: '',
      about: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addPetCallback(
      this.state);

    this.resetState();
  }

  render() {

    return (
      <form
        id="new-pet"
        onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="name">Pet Name</label>
          <input name="name" type="text"
            value={this.state.name}
            onChange={this.onInputChange} />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input name="breed" type="text"
            value={this.state.breed}
            onChange={this.onInputChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input name="age" type="number"
            pattern="[0-9]*"
            value={this.state.age}
            onChange={this.onInputChange} />
        </div>
        <div>
          <label htmlFor="about">About</label>
          <input name="about" type="text"
            value={this.state.about}
            onChange={this.onInputChange} />
        </div>
        <input type="submit" value="Add Pet" />
      </form>
    );
  }
}

export default NewPetForm;
