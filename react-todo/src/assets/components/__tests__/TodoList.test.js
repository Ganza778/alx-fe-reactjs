import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; 

describe('TodoList', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    // Check if the TodoList heading is displayed
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(button);
    
    // Check if the new todo is rendered
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    // Click the todo to toggle its completion
    fireEvent.click(todo);
    
    // Check if the text decoration changes
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle it back
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextElementSibling; // Assuming the button is next to the todo
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check if the todo is removed from the list
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
