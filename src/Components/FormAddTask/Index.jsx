import './FormAddTaskStyles.scss'
import add from '../../assets/adicionar.svg'
import { useState, useEffect } from 'react'


export default function FormAddTask({onChange,defaulttext="",id}=props){
const [formdata, setformdata] = useState({value:defaulttext,id})
const [messageError, setMessageError] = useState("")

useEffect(()=>{
    setformdata({value:defaulttext,id})
},[defaulttext,id])

    
   const handleSubmit = (e) => {
    e.preventDefault()
    if(!formdata.value) {
        setMessageError("campo obrigatório")
        return 
    }
    
    if(formdata.value.length<3) 
    
    {setMessageError("tarefa precisa ter mais de 3 caracteres")
    return
    }
  
    onChange(formdata.value, formdata.id)
    setformdata({value:"", id:null})

    }

   return (<>
    <form className="form" onSubmit={(e)=> handleSubmit(e)}>
        <input className="input" placeholder='Nova tarefa...' onChange={(e)=> setformdata({value:e.target.value, id})} value={formdata.value}/>
        <button className="button" type='submit'><img src={add}/></button>
    </form>

    {messageError &&<p className='messageError'>{messageError}</p>}
     </>

    )}