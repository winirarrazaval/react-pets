import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {

  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>
          <strong>Age:</strong> {this.props.age}
            <strong>Breed:</strong> {this.props.breed}
              <p>
                {this.props.about}
              </p>
            </p>
          </article>
        );
      }

    }

    Pet.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      about: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
    };

    export default Pet;
