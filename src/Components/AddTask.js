import React from 'react'
import style from '../Styles/AddTask.module.css'

const AddTask = ({tasks, setTasks}) => {
  const [error, setError] = React.useState(false)
  var id
  let storage

  React.useEffect(()=>{
    
    storage = window.localStorage.getItem('tasks')
  if(storage){
    setTasks(JSON.parse(storage))  
  }
  },[])

  React.useEffect(()=>{
    setError(false)
    if(error){
      setError(false)
    }
  },[error])

  React.useEffect(()=>{
    if(tasks){
      let tasktString = JSON.stringify(tasks)
      window.localStorage.setItem('tasks', tasktString)
    }
  },[tasks])

  function handleSubmit(event){
  event.preventDefault()
    const validador = event.target[0].value.length
    if(validador === 0){
      setError(true)
    }if(validador !== 0){
    const valor = event.target[0].value
    function gerarID(){
      id =  Math.floor(Date.now() * Math.random()).toString(36)
      return id
    }

    const tasksLS = { "id":`${gerarID()}`, "text":`${valor}`, "checked": `${false}`}
    setTasks(tasks? [...tasks, { "id":`${gerarID()}`, "text":`${valor}`, "checked": `${false}`}] : [{...tasksLS}])
    event.target[0].value = ''
  
  }
}

    return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <input maxLength="35" className={style.input} placeholder='CRIE UMA TAREFA :D' type='text'/>
        <button>CRIAR</button>
      </form>    
      {error && alert('Por favor, preencha algum valor.')}
    </>
    )
}

export default AddTask