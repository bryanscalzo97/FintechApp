import React from 'react';
import { render } from '@testing-library/react-native';
import ProductImage from './ProductImage';

test('renders product image', () => {
  const uri = 'https://example.com/image.jpg';
  const { getByTestId } = render(<ProductImage uri={uri} />);
  const image = getByTestId('product-image');
  expect(image.props.source.uri).toBe(uri);
});
