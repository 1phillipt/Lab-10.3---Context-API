import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";


//
export function TodoList(){

    //disconstructing the context todoContext
    const {todos, toggleTodo, deleteTodo} = useTodo();
    const {filter} = useFilter();

    //filter todos based on the current filter state (all, active, completed)
        const filteredTodos = todos.filter(todo => {
            if (filter === "active") {
                return !todo.completed;
            }
            if (filter === "completed") {
                return todo.completed;
            }
            return true; // Show all todos for 'all' filter
        });
    if(filteredTodos.length === 0){
        return <div>
            No todos yet!
        </div>
    }
    return (
        <ul>
            {
                filteredTodos.map((todo) => (
                    <li key={todo.id} onClick={()=>toggleTodo(todo.id)}>
                       <span>
                        {todo.text}
                        </span> 
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
