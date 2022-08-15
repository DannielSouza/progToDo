import React from 'react'
import './App.css';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import Tasks from './Components/Tasks';


function App() {
  const [tasks, setTasks] = React.useState()
  const [position, setPosition] = React.useState()
  let storagePosition


  React.useEffect(()=>{
    storagePosition = window.localStorage.getItem("position")
    if(storagePosition){
      setPosition(storagePosition)
    }else{
      window.localStorage.setItem("position", "flex")
      setPosition("flex")
    }
  },[])

  React.useEffect(()=>{
    window.localStorage.setItem("position", position)
  },[position])

  return (
    <>
     <AddTask tasks={tasks} setTasks={setTasks} />
     <Tasks tasks={tasks} setTasks={setTasks} position={position} />
     <Footer position={position} setPosition={setPosition} />
    </>    
  );
}

export default App;
