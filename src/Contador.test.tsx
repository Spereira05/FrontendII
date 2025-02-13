import { screen, render, fireEvent } from '@testing-library/react';
import Contador from './Contador';
import '@testing-library/jest-dom';

test ("Button incrementar", () => {
    render(<Contador />);
 
    const button = screen.getByText('Incrementar');
    fireEvent.click(button);

    expect(screen.getByText('1')).toBeInTheDocument();
});

