// index.js (ou outro nome de arquivo)
const express = require("express");
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2004",
    database: "registro"
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    const sql = "SELECT * FROM login WHERE email = ? AND senha = ?";
    db.query(sql, [email, senha], (err, result) => {
        if (err) {
            return res.json("Error");
        }
        if (result.length === 1) {
            // Usuário autenticado com sucesso
            return res.json("Success");
        } else {
            // Usuário não encontrado ou senha incorreta
            return res.json("Não existe");
        }
    });
});

app.post('/cadastro', (req, res) => {
    const { nome, sobrenome, email, senha, confirmasenha } = req.body;

    // Insira os dados na tabela 'usuarios'
    const sqlUsuario = "INSERT INTO usuarios (nome, sobrenome, email, senha, confirmasenha) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlUsuario, [nome, sobrenome, email, senha, confirmasenha], (errUsuario, resultUsuario) => {
        if (errUsuario) {
            console.error("Erro ao cadastrar usuário:", errUsuario);
            return res.status(500).json({ message: "Erro interno do servidor" });
        }

        // Insira os dados na tabela 'login'
        const sqlLogin = "INSERT INTO login (email, senha) VALUES (?, ?)";
        db.query(sqlLogin, [email, senha], (errLogin, resultLogin) => {
            if (errLogin) {
                console.error("Erro ao cadastrar login:", errLogin);
                return res.status(500).json({ message: "Erro interno do servidor" });
            }

            console.log("Usuário cadastrado com sucesso");
            return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
        });
    });
});

app.listen(8081, () => {
    console.log("Ouvindo na porta http://localhost:8081")
})
