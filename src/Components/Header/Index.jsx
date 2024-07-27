import "./HeaderStyles.scss"

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>Organização</li>
                    <li className="active">Tarefas</li>
                </ul>
            </nav>
        </header>
    )
}