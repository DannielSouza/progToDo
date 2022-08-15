import React from 'react'
import './App.css';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';


function App() {
  const [tasks, setTasks] = React.useState()

  return (
    <>
     <AddTask tasks={tasks} setTasks={setTasks} />
     <Tasks tasks={tasks} setTasks={setTasks}/>
    </>    
  );
}

export default App;
