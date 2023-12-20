// CustomIcoButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomIcoButton } from '../index';

describe('CustomIcoButton', () => {
  test('renders CustomIcoButton with disabled styles when disabled', () => {
    render(
      <CustomIcoButton type={'success'} icon="IconAtom" disabled={true} />
    );

    const button = screen.getByLabelText('AddTask');

    // Ensure disabled styles are applied
    expect(button).toHaveStyle({
      color: 'rgba(0, 0, 0, 0.26)',
      backgroundColor: 'transparent',
    });
  });

  test('calls handleAdd callback on button click', () => {
    const handleAddMock = jest.fn();
    render(
      <CustomIcoButton
        icon="IconAtom"
        onClick={handleAddMock}
        type={'success'}
      />
    );

    const button = screen.getByLabelText('AddTask');

    // Trigger button click
    fireEvent.click(button);

    // Ensure handleAdd callback is called
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });
});
