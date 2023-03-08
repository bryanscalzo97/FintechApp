import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header />);
    const titleElement = getByTestId('header-title');
    const nameElement = getByTestId('header-name');

    expect(titleElement).toBeDefined();
    expect(nameElement).toBeDefined();
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(<Header />);
    const titleElement = getByTestId('header-title');
    const nameElement = getByTestId('header-name');

    expect(titleElement.props.style).toEqual({
      fontSize: 20,
      fontWeight: 800,
      fontFamily: "Avenir"
    });
    expect(nameElement.props.style).toEqual({
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Avenir"
    });
    expect(getByTestId('header-container').parent.props.style).toEqual({
      paddingBottom: 10,
    });
  });
});
