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
    addTodo:(text:string)=> void; // adds new todo
    deleleTodo:(id:string)=>void; //delete todo from the list by id
    toggleTodo:(id: string)=>void;// this function will let me mark a todo as completed or not by id
    editTodo:(id:string, newText:String)=>void; //this is for editing exiting todo by id and patch by newText
    clearCompleted:()=> void; //clear completed work
}

//Action "type" contains all possible ways to change todo list
type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: string }
  | { type: "DELETE_TODO"; id: string }
  | { type: "EDIT_TODO"; id: string; newText: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "SET_TODOS"; todos: Todo[] };

  //todos- current state of the todo list
  // dispatch- function to send actions to the reducer
  // useReducer- hook that manages state and actions in a predictable way
  // todoReducer- function that takes current state and an action, 
  // and returns new state based on the action type
  // []- initial state of the todo list, which is an empty array
const [todos, dispatch] = useReducer(todoReducer, []);

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
