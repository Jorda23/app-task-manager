import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomButton } from '../../components/Button'; // Make sure to have the correct path

describe('CustomButton', () => {
  it('renders the provided label', () => {
    const label = 'Add';
    render(<CustomButton label={label} />);

    const button = screen.getByText(label);

    expect(button).toBeInTheDocument();
  });

  test('renders disabled button', () => {
    render(<CustomButton label="Add" disabled />);

    const button = screen.getByRole('button');

    // Verify that the button has been rendered with the disabled button style
    expect(button).toHaveStyle(`
        cursor: default;
    `);

    // Verify that the button is disabled
    expect(button).toBeDisabled();
  });
});
