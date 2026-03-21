import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";


//
export function TodoList(){

    //disconstructing the context todoContext
    const {todos, toggleTodo, deleteTodo, editTodo} = useTodo();
    const {filter} = useFilter();

    const [editingId, setEditingId]=useState<string | null>(null);
    const [editText, setEditText] = useState("");

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
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    {editingId === todo.id ? (
                    <>
                    <input value={editText} onChange={e =>setEditText(e.target.value)}/>
                    <button onClick={()=> {
                        editTodo(todo.id, editText)
                        setEditingId(null);
                        setEditText("");
                    }}>Save</button>
                    <button>cancel</button>
                  
                    </>): (<>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={()=>{setEditingId(todo.id); setEditText(todo.text)}}>
                        Edit
                    </button>
                        
                    
                    </>)
}
                </li>

            ))}
        </ul>
    )
}
