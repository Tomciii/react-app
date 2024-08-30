import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlashCard from './FlashCard';

describe('<FlashCard />', () => {
  test('it should mount', () => {
    render(<FlashCard />);

    const FlashCard = screen.getByTestId('FlashCard');

    expect(FlashCard).toBeInTheDocument();
  });
});