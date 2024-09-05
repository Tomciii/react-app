import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WordTable from './WordTable';

describe('<WordTable />', () => {
  test('it should mount', () => {
    render(<WordTable />);

    const WordTable = screen.getByTestId('WordTable');

    expect(WordTable).toBeInTheDocument();
  });
});