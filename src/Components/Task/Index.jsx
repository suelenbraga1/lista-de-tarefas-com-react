import './TaskStyles.scss'
import edit from '../../assets/editar.svg'
import lixeira from '../../assets/lixeira.svg'
import { useState } from 'react'

export default function Task({text,defaultchecked, onChange, onClick, taskid, clickEdit}=props){
const [checked,setchecked] = useState(defaultchecked)
    return(
        <article>
        <p>{text}</p>
        <input type="checkbox" name="" id="status" checked={checked} onChange={()=>setchecked(!checked)} />
        <div>
            <img onClick={()=>onClick(taskid, "edit", text)}src={edit}/>
            <img onClick={()=>onClick(taskid, "delete", text)}src={lixeira}/> 
        </div>
        </article>
    )
}