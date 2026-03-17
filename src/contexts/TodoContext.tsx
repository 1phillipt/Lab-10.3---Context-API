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

