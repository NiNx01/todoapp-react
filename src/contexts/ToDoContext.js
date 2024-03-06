import { useContext } from "react";
import { createContext } from "react";


export const ToDoContext = createContext({
    tasks : [
        {
            id : 1,
            taskName : "ABCD",
            isCompleted : false,
        }
    ],
    addTask : (taskName) => {},
    updateTask : (id, taskName) => {},
    deleteTask : (id) => {} ,
    markAsComplete : (id) => {}
}) ;

export const useToDoContext = () => {
    return useContext(ToDoContext);
}

export const ToDoContextProvider = ToDoContext.Provider ;