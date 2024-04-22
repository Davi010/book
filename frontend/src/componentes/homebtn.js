import '../css/cadastro.css';
import {Link} from 'react-router-dom';
function Homebtn({type, value}){
    return(
        <div className="proximo">
            <button type={type}><Link to="/">Voltar a tela inicial</Link></button>
        </div>
    )
}
export default Homebtn;