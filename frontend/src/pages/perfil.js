import { Link } from 'react-router-dom';
import '../css/perfil.css';

function Chat() {
    return (
        <div className="corpo4">
            <div className="cabecalho4">
                <span>Book4ForAll</span>
                <div className="lista4">
                    <ul>
                        <li><a href=" "><Link to="/feed">Home</Link></a></li>
                        <li><a href=" "><Link to="/estante">Estante</Link></a></li>
                    </ul>
                </div>
                <a className="chat4" href=" "><Link to="/chat">Perfil</Link></a>
            </div>
        </div>
    )
}
export default Chat;