// Cadastro.js
import Input from '../componentes/input.js';
import Homebtn from '../componentes/homebtn.js';
import '../css/cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Cadastro() {
    const [values, setValues] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirmasenha: ''
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/cadastro', values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
                navigate('/login'); // Redireciona para a página de login após o cadastro
            })
            .catch(err => {
                console.error('Erro ao cadastrar usuário:', err);
            });
    }

    return (
        <div className="corpo">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Cadastro</h1>
                    <Input type="text" name="nome" text="" placeholder="Nome" handleInput={handleInput} required/>
                    <Input type="text" name="sobrenome" text="" placeholder="Sobrenome" handleInput={handleInput} />
                    <Input type="text" name="email" text="" placeholder="E-mail" handleInput={handleInput} />
                    <Input type="password" name="senha" text="" placeholder="Senha" handleInput={handleInput} />
                    <Input type="password" name="confirmasenha" text="" placeholder="Confirme a senha" handleInput={handleInput} required />
                    <button type="submit" className="btn">Cadastre-se</button>
                    <div className="link-cadastro">
                        <p>Já possui uma conta? <Link to="/login">Entre</Link></p>
                    </div>
                </form>
                <Homebtn />
            </div>
        </div>

    )
}

export default Cadastro;
