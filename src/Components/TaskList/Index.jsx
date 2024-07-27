import Task from "../Task/Index"
import "./TaskListStyles.scss"
import addtask from "../../assets/adicionar.svg"
import FormAddTask from "../FormAddTask/Index"
import { useEffect, useState } from "react"

export default function TaskList({modalOpen, executeCrud, changeexecuteCrud, changeModalData}){
    const [tasks, setTasks] = useState([])
    const [Temptaskid, setTempTaskid] = useState(0)
    const [TempTask, setTempTask] = useState({})
    const [operation, setOperation] = useState("")
    

    useEffect(()=>{
        if (executeCrud){
          
        if (operation === "edit"){
            changeEdit(Temptaskid)
        }
        if (operation === "delete"){
            changeDelete(Temptaskid)
        } 
        changeexecuteCrud(false)   
        }

    },[executeCrud])
    
    function addTask(text,id) { 
        const taskid = id || Math.random()*100
        setTasks(prev => [...prev, { id:taskid, name: text, checked: false }])
        setTempTask({})
        
    }

    const editTask = (text, checked, id) =>{
        
    const newTasks = tasks.map(task=>{
    if (task.id === id){
            return {text,checked,id}
        }
        return task
    })
    
        setTasks(newTasks)
    }
    
    function changeEdit(taskid){
       
    const newTasks = tasks.filter((task)=>{return task.id !== taskid})
    const currentTask = tasks.find((task)=>{return task.id === taskid})
    setTasks(newTasks)
    setTempTask(currentTask)


    }

    function changeDelete(taskid){
        
    const newTasks = tasks.filter((task)=>{return task.id !== taskid})
    console.log(taskid)
    console.log(newTasks)
    setTasks(newTasks)
    setTempTaskid(null)
    setOperation(null)

}
    
    
    function onClick(taskid, operation, taskname){
        modalOpen()
        setTempTaskid(taskid)
        setOperation(operation)
        changeModalData(operation === "edit" ? "editar": "excluir", taskname)
        console.log(taskid, 'qualquer coisa')
        
    }

    return(
        <div className="Table">
            <div className="Header-table">
                <p>Tarefas</p>
                <p>Status</p>
                <p>Opções</p>
            </div> <span className="border"></span>
            <ul className="body-table">
           {tasks.map((task) => (
                <li key={task.id}>
                <Task taskid={task.id} onClick={onClick} text={task.name} checked={task.checked} onChange={editTask} />
              </li>
           ))}

    

{/*{tasks.map((task) => (
          isEddit && isEddit === task.id ? (
            <li key="Edit">
             
              <FormAddTask />
            
            </li>
          ) : (
            <li key={task.id}>
             <Task onClick={changeEdit} text={task.name} checked={task.checked} onChange={editTask} /> 
            </li>
          )
          ))}*/}

                <li><FormAddTask onChange={addTask} defaulttext={TempTask.name || ""} id={TempTask.id} /></li>
            </ul>    
         </div>
    )
}