// src/components/__tests__/TodoList.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo'); // Make sure this placeholder exists in your component
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextElementSibling; // Assuming the button is next to the todo
    
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
