import React from "react";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { FilterProvider } from './contexts/FilterContext';
import { TodoProvider } from './contexts/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButton } from './components/FilterButtons';
import { ThemeToggleButton } from './components/ThemeToggleButton';


function AppContent() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButton />
      <TodoList />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <AppContent />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App
