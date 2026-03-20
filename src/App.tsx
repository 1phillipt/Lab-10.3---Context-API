import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { FilterProvider } from './contexts/FilterContext';
import { TodoProvider } from './contexts/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButton } from './components/FilterButtons';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <TodoInput />
          <FilterButton/>
          <TodoList />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App
