
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks]= useState([
    {
      label:"task1",
      value:"task1"
    }
  ])
const [currentTask, setCurrentTask] = useState("")  

  const handleClick = (e) => {
    console.log(tasks.length)
    if(tasks.length<5){
      const newTasks=[
        ...tasks,
        {
          label:currentTask,
          value:currentTask
        }
      ]
      setTasks(newTasks)
      
    }
    setCurrentTask("")
    
  }
  const handleOnChange = (e) => { 
    setCurrentTask(e.target.value)
  }

  return (
    <div className="App">
            {tasks.map((task, index)=>{
                return <div key={index}>{task.label}<input value={task.value} type="checkbox" onClick={handleClick}/><br/></div>
            })
          }
          
      <h1>Add new task</h1>
      <input placeholder="new" onChange={handleOnChange} value={currentTask} /><button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
