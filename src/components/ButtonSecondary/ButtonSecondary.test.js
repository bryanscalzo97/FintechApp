import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSecondary from './ButtonSecondary';


describe('ButtonSecondary', () => {
  const onPressMock = jest.fn();
  const buttonText = 'Press me!';

  it('should render correctly', () => {
    const { getByTestId } = render(
      <ButtonSecondary onPress={onPressMock} title={buttonText} />
    );
    const buttonElement = getByTestId('button-secondary');

    expect(buttonElement).toBeDefined();
    expect(buttonElement.props.style).toEqual(expect.objectContaining({
      height: 50,
      justifyContent: 'center',
      padding: 10,
      alignItems: 'center',
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#334FFA',
    }));
  });

  it('should call onPress when pressed', () => {
    const { getByText } = render(
      <ButtonSecondary onPress={onPressMock} title={buttonText} />
    );
    const buttonElement = getByText(buttonText);
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

