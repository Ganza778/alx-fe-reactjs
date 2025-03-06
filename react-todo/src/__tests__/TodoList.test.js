import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    // Check that the Todo List title is rendered
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    // Check that the initial todos are displayed
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: 'New Todo' } });
    // Simulate clicking the Add button
    fireEvent.click(button);

    // Ensure the new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item between completed and not completed', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);

    // Click to mark as completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Click again to mark as not completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    // Ensure the todo item is removed
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
