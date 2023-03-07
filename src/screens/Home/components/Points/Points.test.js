import { render, screen } from '@testing-library/react-native';
import Points from './Points';

describe('Points component', () => {
  test('renders points with given value', () => {
    const points = 1234;
    render(<Points points={points} />);
    const title = screen.getByTestId('points-title');
    const monthTitle = screen.getByTestId('points-month-title');
    const monthPoints = screen.getByTestId('points-month-points');
    expect(title).toBeDefined();
    expect(monthTitle).toBeDefined();
    expect(monthPoints).toBeDefined();
    // converts monthPoints to a number
    const parsedPoints = parseInt(monthPoints.props.children); 
    // verifies that parsedPoints is a valid number
    expect(parsedPoints).not.toBeNaN(); 
  });
});
