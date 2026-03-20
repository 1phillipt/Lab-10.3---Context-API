import React from "react";
import { useFilter } from "../contexts/FilterContext";

export function FilterButton(){
    const {filter, setFilter} = useFilter();

    return (
        <div>
            <button onClick={()=>setFilter("all")} disabled= {filter === "all"}>All</button>
             <button onClick={()=>setFilter("active")} disabled= {filter === "active"}>Active</button>
              <button onClick={()=>setFilter("completed")} disabled= {filter === "completed"}>Completed</button>
        </div>
    )
}