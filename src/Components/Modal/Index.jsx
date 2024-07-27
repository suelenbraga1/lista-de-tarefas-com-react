import "./ModalStyle.scss";


export default function Modal({negativebutton, positivebutton, modalData}){
    return(
        <div className="modal">
            <h2>{`Deseja ${modalData.operation} este item?`}</h2>
            <p>{modalData.text}</p>`
            
            <div>
                <button onClick={()=>negativebutton()} className="modal-button-negative">Não</button>
                <button onClick={()=>positivebutton(true)} className="modal-button-positive">Sim</button>
            </div>
        </div>

    )
}