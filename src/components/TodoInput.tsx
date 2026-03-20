import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { set } from "mongoose";

export function TodoInput(){
    //initilizing text to empty string through state
    const [text, setText] = useState("");
    const {addTodo} = useTodo();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault;

        if(text.trim()){
            addTodo(text.trim());
            setText("");
        }
    }

    return (
        < form onSubmit ={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a todo"/>
            <button type="submit">Add</button>
        </form>
    )
}