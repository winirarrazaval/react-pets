// src/NewPetForm.test.js
import React from 'react';
import NewPetForm from './NewPetForm';
import { mount, shallow } from 'enzyme';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount( <NewPetForm addPetCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('when the user enters a name in the text field, the field is updated', () => {
    // Mount component to the DOM
    const wrapper = shallow( <NewPetForm addPetCallback={() => {}} />);
    // Find the input in the component
    let nameField = wrapper.find('input[name="name"]');
    // Trigger a 'change' event
    nameField.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob',
      },
    });
    // Force the component to update (setState is async)
    wrapper.update();
    // Find the updated component
    nameField = wrapper.find('input[name="name"]');

    // Assert
    expect(nameField.getElement().props.value).toEqual('Bob');
  });

  test('When the user enters text it appears in that input field', () => {
    const wrapper = mount( <NewPetForm addPetCallback={() => {}} />);

    const fieldValues = [
      {
        field: 'name',
        value: 'Bob',
      },
      {
        field:  'breed',
        value: 'Pomeranian',
      },
      {
        field: 'age',
        value: '6',
      },
      {
        field: 'about',
        value: 'fun breed',
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let element = wrapper.find(`input[name="${field}"]`)
      element.simulate('change', {target: {
        name: field,
        value,
      }});
      wrapper.update();
      element = wrapper.find(`input[name="${field}"]`);
      expect(element.getElement().props.value).toEqual(value);
    });
  });

  test('addPetCallback prop is called when the form is submitted', () => {
    // Arrange
    const mockAddPetCallback = jest.fn();
    const wrapper = shallow(<NewPetForm addPetCallback={mockAddPetCallback} />);
    const form = wrapper.find('form');

    // Act
    form.simulate('submit', {
      preventDefault: () => {},
    });
    wrapper.update();

    // Assert
    expect(mockAddPetCallback).toHaveBeenCalled();
    expect(mockAddPetCallback.mock.calls[0][0]).toEqual({
      name: '',
      age: '',
      breed: '',
      about: '',
    });
  });
});
