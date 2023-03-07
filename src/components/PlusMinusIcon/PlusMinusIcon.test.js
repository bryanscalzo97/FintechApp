import React from 'react';
import { render } from '@testing-library/react-native';
import PlusMinusIcon from './PlusMinusIcon';

describe('PlusMinusIcon', () => {
  it('should render the component with a plus icon when value is false', () => {
    const { getByTestId } = render(<PlusMinusIcon value={false} />);
    const plusIcon = getByTestId('plus-icon');
    expect(plusIcon).toBeDefined();
  });

  it('should render the component with a minus icon when value is true', () => {
    const { getByTestId } = render(<PlusMinusIcon value={true} />);
    const minusIcon = getByTestId('minus-icon');
    expect(minusIcon).toBeDefined();
  });

  it('should set the icon color to red when value is true', () => {
    const { getByTestId } = render(<PlusMinusIcon value={true} />);
    const minusIcon = getByTestId('minus-icon');
    expect(minusIcon.props.style.color).toBe('red');
  });

  it('should set the icon color to green when value is false', () => {
    const { getByTestId } = render(<PlusMinusIcon value={false} />);
    const plusIcon = getByTestId('plus-icon');
    expect(plusIcon.props.style.color).toBe('green');
  });
});
