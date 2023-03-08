import React from 'react';
import { render } from '@testing-library/react-native';
import ProductDetails from './ProductDetails';

describe('ProductDetails component', () => {
  const mockItem = {
    createdAt: '2022-01-01T00:00:00.000Z',
    points: 10,
  };

  it('should render product title with correct style', () => {
    const { getByTestId } = render(<ProductDetails item={mockItem} />);
    const productTitle = getByTestId('product-title');

    expect(productTitle).toBeDefined();
    expect(productTitle.props.style).toEqual(STYLES.productTitle);
  });

  it('should render product date with correct style', () => {
    const { getByTestId } = render(<ProductDetails item={mockItem} />);
    const productDate = getByTestId('product-date');

    expect(productDate).toBeDefined();
    expect(productDate.props.style).toEqual(STYLES.productDate);
  });

  it('should render product points with correct style', () => {
    const { getByTestId } = render(<ProductDetails item={mockItem} />);
    const productPoints = getByTestId('product-points');

    expect(productPoints).toBeDefined();
    expect(productPoints.props.style).toEqual(STYLES.productPoints);
  });

  it('should render product points value with correct style', () => {
    const { getByTestId } = render(<ProductDetails item={mockItem} />);
    const productPointsValue = getByTestId('product-points-value');

    expect(productPointsValue).toBeDefined();
    expect(productPointsValue.props.style).toEqual(STYLES.productPointsValue);
  });
});

const STYLES = {
  productTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
  },
  productDate: {
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 19,
    paddingBottom: 20,
  },
  productPoints: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
  },
  productPointsValue: {
    fontSize: 24,
    fontWeight: '800',
    paddingTop: 32,
  },
};
