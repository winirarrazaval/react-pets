import React from 'react';
import TestRenderer from 'react-test-renderer';
import Pet from './Pet';

describe('Pet', () => {
  test('That it can render without crashing', () => {
    const testRenderer = TestRenderer.create( <Pet
      name="Pete"
      breed="Pomeranian"
      age={23}
      about="cute!"
      />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
