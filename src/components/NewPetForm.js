import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPetForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      breed: '',
      about: '',
    }
  }

  clearForm = () => {
    const fields = {
      name: '',
      age: 0,
      breed: '',
      about: '',
    };
    this.setState(fields);
  }

  formValid = () => {
    return this.state.name.length > 0 &&
      this.state.age > 0 &&
      this.state.breed.length &&
      this.state.about.length;
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.formValid()) {
      this.props.submitHandler(this.state);
      this.clearForm();
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const stateUpdate = {}
    stateUpdate[fieldName] = fieldValue;
    this.setState(stateUpdate);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
            />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.onFieldChange}
            />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            value={this.state.breed}
            onChange={this.onFieldChange}
            />
        </div>
        <div>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            value={this.state.about}
            onChange={this.onFieldChange}
            />
        </div>
        <input type="submit" value="Add Pet" />
      </form>
    )
  }

}

NewPetForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default NewPetForm;
