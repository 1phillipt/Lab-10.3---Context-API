import { createContext, useContext, useState, type ReactNode } from "react";
import type { FilterType } from "../types";

interface FilterContextType {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({children}:{children:ReactNode}){

  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <FilterContext.Provider value={{filter,setFilter}}>
       {children}
    </FilterContext.Provider>
  );

}

export function useFilter(){
  const context = useContext(FilterContext);

   if (!context) throw new Error("useFilter must be used within a FilterProvider");
  return context;
}
