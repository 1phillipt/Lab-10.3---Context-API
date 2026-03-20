// export interface Todo {
//   id: string
//   text: string
//   completed: boolean
// }

// export type FilterType = "all" | "active" | "completed"

// export type ThemeType = "light" | "dark"

import React from "react";
import { createContext, useReducer, useContext, type ReactNode, useEffect } from "react";
import type { Todo } from "../types";

interface TodoContextType {
    todos: Todo[]; //holds alll todo items
    addTodo: (text: string) => void; // adds new todo
    deleteTodo: (id: string) =>void; //delete todo from the list by id
    toggleTodo: (id: string) =>void;// this function will let me mark a todo as completed or not by id
    editTodo: (id: string, newText: string) => void; //this is for editing exiting todo by id and patch by newText
    clearCompleted: () => void; //clear completed work
}

//Action "type" contains all possible ways to change todo list
type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: string }
  | { type: "DELETE_TODO"; id: string }
  | { type: "EDIT_TODO"; id: string; newText: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "SET_TODOS"; todos: Todo[] };

 

// this is the reducer function that defines 
// how the state of the todo list changes 
// in response to different actions.

function todoReducer(state: Todo[], action:Action): Todo[]{
    switch(action.type){
        // this case is for adding a new todo item to the list. 
        // It creates a new todo object with a unique id, the provided text, 
        // and a completed status of false, and then returns a new array 
        // that includes all existing todos plus the new one.
        case "ADD_TODO":
            return [
                ...state, {
                    id: Date.now().toString(), text: action.text, completed:false}
            ];
            // this case is for toggling the completed status of a todo item.
            // It maps over the current state and flips the completed status
            // of the todo with the matching id.
        case "TOGGLE_TODO":            
            return state.map(todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
            // this case is for deleting a todo item from the list. 
            // It filters out the todo with the matching id.
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
                // this case is for editing the text of an existing todo item.
        case "EDIT_TODO":
            return state.map(todo => 
                todo.id === action.id ? {...todo, text: action.newText} : todo
            );
            // this case is for clearing all completed todo items from the list.
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
                // this case is for setting the entire todo list, 
                // which can be useful for initializing the state 
                // from local storage or an API response.
        case "SET_TODOS":
            return action.todos;
        default:
            return state;

    }
}

// this line creates a new context for the todo list,
// which will allow us to share the todo state and actions 
// across different components in our application without 
// having to pass props down manually at every level.   
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }):React.ReactElement {


  // this line uses the useReducer hook to manage the state of the todo list.
  // It takes the todoReducer function and an initial state (an empty array) as arguments, 
  // and returns the current state (todos) and a dispatch function that we can use to send actions to the reducer.
  const [todos, dispatch] = useReducer(todoReducer, []);


  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", text });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: "DELETE_TODO", id });
  };
  // this function will let me mark a todo as completed or not by id
  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const editTodo = (id: string, newText: string) => {
    dispatch({ type: "EDIT_TODO", id, newText });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    // this provider component wraps its children with the TodoContext.Provider, 
    // passing down the current list of todos and the action functions as the context value.
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

//custom hook to use the TodoContext in our components.
export function useTodo(){
  const context = useContext(TodoContext)

  if(!context) throw new Error("useTod must be used within a TodoProvider")

    return context;

}

