import react from "react";
import { useTodo } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";


//
export function TodoList(){

    //disconstructing the context todoContext
    const {todos, toggleTodo, deleteTodo} = useTodo();
    const {filter} = useFilter();

    //filter
    const filteredTodos = todos.filter(todo=>{
        if(filter === "active"){
            return !todo.completed;
        }
        if(filter === "completed"){
            return todo.completed;
        }
    })
    if(filteredTodos.length === 0){
        return <div>
            No todos yet!
        </div>
    }
}
