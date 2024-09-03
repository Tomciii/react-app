import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlashCards from './FlashCards';

describe('<FlashCards />', () => {
  test('it should mount', () => {
    render(<FlashCards />);

    const FlashCards = screen.getByTestId('FlashCards');

    expect(FlashCards).toBeInTheDocument();
  });
});