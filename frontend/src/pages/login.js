import Input from '../componentes/input.js';
import Homebtn from '../componentes/homebtn';
import '../css/cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        senha: ''
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/login');
                } else {
                    alert("Não existe");
                }
            })
            .catch(err => console.error('Erro ao fazer login:', err));
    }

    return (
        <div className="corpo">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        handleInput={handleInput}
                    />
                    <Input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        handleInput={handleInput}
                    />
                    <div className="lembrar-senha">
                        
                        <div>
                            <label><input type="checkbox" />Lembre-me</label>
                        </div>
                        <div>
                            <a href="a">Esqueci minha senha</a>
                        </div>

                    </div>

                    <button type="submit" className="btn"><p><Link to="/feed">Login</Link></p></button>

                    <div className="link-cadastro">
                        <p>Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </form>
                <Homebtn />
            </div>
        </div>

    )
}

export default Login;
