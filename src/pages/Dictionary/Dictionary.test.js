import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dictionary from './Dictionary';

describe('<Dictionary />', () => {
  test('it should mount', () => {
    render(<Dictionary />);

    const Dictionary = screen.getByTestId('Dictionary');

    expect(Dictionary).toBeInTheDocument();
  });
});