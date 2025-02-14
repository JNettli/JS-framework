import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Eat breakfast",
      completed: true,
    },
    {
      id: 2,
      task: "Eat lunch",
      completed: false,
    },
    {
      id: 3,
      task: "Eat dinner",
      completed: false,
    }
  ]);

  return (
    <>
      <header className="main-header">
        <h1>
          Todo List
        </h1>
      </header>
      <main>
        <form onSubmit={(e) => {
          e.preventDefault();
          const inputValue = document.querySelector('#task-input').value;
          setTasks([...tasks, {
            id: tasks[tasks.length-1].id + 1,
            task: inputValue,
            completed: false,
          }])
        }}>
          <input type="text" id="task-input" name="task-input" />
          <button type="submit">Clic me pls</button>
        </form>
        <ul>
          {tasks.map((item) => {
            return <li key={item.id}>
              <span>
                {item.task}
              </span>
              <input type="checkbox" checked={item.completed} onChange={() => {
                setTasks(tasks.map((task) => {
                  if(task.id == item.id) {
                    task.completed = !task.completed
                  }
                  if(task.completed == true) {
                    document.querySelectorAll("span").style = ""
                  }
                  return task;
                }))
              }}/>
              <button style={{background: "red"}} onClick={() => {
                setTasks(tasks.filter((task) => {
                  if (task.id == item.id) {
                    return false;
                  } else {
                    return true;
                  }
                }))
              }}>Delet!</button>
            </li>
          })}
        </ul>
      </main>
    </>
  )
}

export default App
