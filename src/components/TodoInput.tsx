
import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import "./TodoInput.css";


export function TodoInput(){
    //initilizing text to empty string through state
    const [text, setText] = useState("");
    const {addTodo} = useTodo();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(text.trim()){
            addTodo(text.trim());
            setText("");
        }
    }

    return (
        <form className="todo-input-form" onSubmit={handleSubmit}>
            <input
                className="todo-input-field"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a todo"
            />
            <button className="todo-input-button" type="submit">Add</button>
        </form>
    )
}