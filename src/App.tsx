import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { FilterProvider } from './contexts/FilterContext';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider children={undefined}>
          {/* Your app components go here */}
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App
