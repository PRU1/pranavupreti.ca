import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders every redesigned section', () => {
  render(<App />);
  expect(screen.getAllByText(/Pranav Upreti/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/A bit more about me/i)).toBeInTheDocument();
  expect(screen.getByText(/Off the clock/i)).toBeInTheDocument();
  expect(screen.getByText(/Things I've built/i)).toBeInTheDocument();
  expect(screen.getByText(/Where I've spent my time/i)).toBeInTheDocument();
  expect(screen.getByText(/What I work with/i)).toBeInTheDocument();
  expect(screen.getByText(/Publications & writing/i)).toBeInTheDocument();
  expect(screen.getByText(/Let's talk/i)).toBeInTheDocument();
});

test('gallery carousel cycles through captions on next/prev', () => {
  render(<App />);

  expect(screen.getByText('Jokers Hill trail')).toBeInTheDocument();

  userEvent.click(screen.getByLabelText('Next photo'));
  expect(screen.getByText('Twinning with my dog Milo')).toBeInTheDocument();

  userEvent.click(screen.getByLabelText('Previous photo'));
  expect(screen.getByText('Jokers Hill trail')).toBeInTheDocument();
});
