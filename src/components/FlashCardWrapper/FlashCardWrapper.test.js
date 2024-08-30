import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlashCardWrapper from './FlashCardWrapper';

describe('<Header />', () => {
  test('it should mount', () => {
    render(<Header />);

    const Header = screen.getByTestId('Header');

    expect(Header).toBeInTheDocument();
  });
});