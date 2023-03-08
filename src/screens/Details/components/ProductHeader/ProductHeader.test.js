import React from 'react';
import { render } from '@testing-library/react-native';
import ProductHeader from './ProductHeader';

describe('ProductHeader', () => {
  it('renders correctly', () => {
    const item = { product: 'Test Product' };
    const { getByTestId } = render(<ProductHeader item={item} />);
    const titleElement = getByTestId('header-title');

    expect(titleElement).toBeDefined();
  });

  it('applies correct styles', () => {
    const item = { product: 'Test Product' };
    const { getByTestId } = render(<ProductHeader item={item} />);
    const titleElement = getByTestId('header-title');

    expect(titleElement.props.style).toEqual({
      fontSize: 24,
      fontWeight: '800',
      fontFamily: "Avenir"
    });
    expect(getByTestId('header-container').props.style).toEqual({
      backgroundColor: '#CFD6FF',
      height: 150,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 24,
      justifyContent: 'flex-end',
    });
  });
});
