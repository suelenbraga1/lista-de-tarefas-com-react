import Modal from '../Modal/Index'
import TaskList from '../TaskList/Index'
import './ContainerMainStyles.scss'
import { useState } from 'react'



export default function ContainerMain(){
const [executeCrud, setexecuteCrud] = useState(false)
const [isModalOpen,setisModalOpen] = useState(false)
const [modalData, setModalData] = useState({operation:"", text:""})
function changeModalOpen(){
    setisModalOpen(v=>!v)
}
function changeexecuteCrud(execute){
    setisModalOpen(false)
    setexecuteCrud(execute)
    console.log(execute)
}

function changeModalData(operation, text){
    setModalData({operation,text})
    
}


    return(
        <main className="container-main">
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <div>
                <TaskList changeModalData={changeModalData} modalOpen={changeModalOpen} executeCrud={executeCrud} changeexecuteCrud={changeexecuteCrud}/>
                {isModalOpen && <Modal modalData={modalData} negativebutton={changeModalOpen} positivebutton={changeexecuteCrud}/>}
                
            </div>
        </main>
    )}
