import { useState } from "react";
import "./App.css";
import { AddTask, Task, ThemeSwitch } from "./components";
import { ToDoContextProvider, ThemeContextProvider } from "./contexts";
import { useEffect } from "react";
import spaceman from "./assets/spaceman.png" ;

function App() {

  const [themeMode, setThemeMode] = useState("dark") ;

  const darkMode = ()=>{
    setThemeMode("dark")
  }

  const lightMode = ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    const html = document.querySelector("html") ;
    html.classList.remove("light", "dark")
    html.classList.add(themeMode)
  },[themeMode])

  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks((prevTask) => [{ id: Date.now(), ...taskName }, ...prevTask]);
  };

  const updateTask = (id, taskName) => {
    setTasks((prevTask) =>
      prevTask.map((oneTask) => (oneTask.id === id ? taskName : oneTask))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => prevTask.filter((oneTask) => oneTask.id !== id));
  };

  const markAsComplete = (id) => {
    setTasks((prevTask) =>
      prevTask.map((oneTask) =>
        oneTask.id === id
          ? { ...oneTask, isCompleted: !oneTask.isCompleted }
          : oneTask
      )
    );
  };

  useEffect(()=>{
   const storedTasks = JSON.parse(localStorage.getItem("tasks")) ;
  
   if(storedTasks && storedTasks.length > 0) {
    setTasks(storedTasks) ;
   }
  
  },[])

  useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(tasks) ) ;
  },[tasks])

  
  return (
    <ToDoContextProvider
      value={{ tasks, addTask, updateTask, deleteTask, markAsComplete }}
    >
      <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
        <div className="main-wrapper">
          <main>
            <header>
              <h1>Welcome</h1>
              <div className="theme-switch-wrapper">
              <div className="dark-mode-text">Dark mode</div> <ThemeSwitch />
              </div>
            </header>
            <AddTask />
            <hr />
            <h2>To Do</h2>
            <div className="task-wrapper">
              {tasks.length > 0 ? tasks.map((taskName) => (
                <div key={taskName.id}>
                  <Task taskName={taskName} />
                </div>
              )) : 
                <div className="no-tasks">
                  <img src={spaceman} width={220} alt="" />
                  No tasks found.
                  
                  </div>
              }
            </div>
          </main>
        </div>
      </ThemeContextProvider>
    </ToDoContextProvider>
  );
}

export default App;
