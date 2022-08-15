import React from 'react'
import check from '../assets/check.png'
import trash from '../assets/trash.png'
import style from '../Styles/Tasks.module.css'
let thisItem = null
let taskChecada

const Tasks = ({tasks, setTasks, position}) => {
  const liItem = React.useRef()


  function delTask({target}){
    tasks.forEach((task)=>{
      if(task.id === target.id){
        thisItem =  tasks.indexOf(task) 
      }
    })
   tasks.splice(thisItem, 1)
    if(tasks.length === 0){
      window.localStorage.setItem('tasks', null)
      document.location.reload()
    }
    setTasks(tasks)
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    let itemAtual = document.getElementById(`${target.id}`)
    document.location.reload()
    itemAtual.remove()
  }

  function handleClick({target}){
    tasks.forEach((task)=>{
      if(task.id === target.id){
        thisItem =  tasks.indexOf(task)

        if(tasks[thisItem].checked === 'false'){
          target.setAttribute("checado", 'false')
          tasks[thisItem].checked = 'true'
          taskChecada = tasks.splice(thisItem, 1)
          setTasks([...tasks, ...taskChecada])
          /* document.location.reload() */
          return
        }

          tasks[thisItem].checked = 'false'
          target.setAttribute("checado", 'true')
          taskChecada = tasks.splice(thisItem, 1)
          setTasks([...taskChecada, ...tasks])
          /* document.location.reload() */
          return
      }
    })



  }

  function handleClickFromSpan({nativeEvent}){
    const target = nativeEvent.path[1]

    tasks.forEach((task)=>{
      if(task.id === target.id){
        thisItem =  tasks.indexOf(task)

        if(tasks[thisItem].checked === 'false'){
          target.setAttribute("checado", 'false')
          tasks[thisItem].checked = 'true'
          taskChecada = tasks.splice(thisItem, 1)

          setTasks([...tasks, ...taskChecada])
          /* document.location.reload() */
          return
        }

          tasks[thisItem].checked = 'false'
          target.setAttribute("checado", 'true')
          taskChecada = tasks.splice(thisItem, 1)
          setTasks([...taskChecada, ...tasks])
          /* document.location.reload() */
          return
      }
    })

    

  }
  if(tasks) return (
    <ul className={position} id='list'>

      {tasks && tasks.map(({id, text, checked})=>{
        if(checked === 'true'){

          return(
          <li checado='true' ref={liItem} id={id} onClick={handleClick} className={style.list} key={id}>
          <img className={style.check} src={check} alt='marcado como feito'/> 
          <span onClick={handleClickFromSpan}>{text}</span>
          <img className={style.trash} src={trash} id={id} onClick={delTask} alt='deletar tarefa'/> 
        </li>
          )
        } return(
          <li checado='false' ref={liItem} id={id} onClick={handleClick} className={style.list} key={id}>
          <img className={style.check} src={check} alt='marcado como feito'/> 
          <span onClick={handleClickFromSpan}>{text}</span>
          <img className={style.trash} src={trash} id={id} onClick={delTask} alt='deletar tarefa'/> 
        </li>
          )
      })}
    </ul>
  )
}

export default Tasks