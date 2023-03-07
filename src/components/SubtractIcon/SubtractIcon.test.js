import React from 'react';
import { render } from '@testing-library/react-native';
import SubtractIcon from './SubtractIcon';

describe('SubtractIcon', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SubtractIcon />);
    const svgElement = getByTestId('subtract-icon');
    expect(svgElement).toBeTruthy();
  });
});
