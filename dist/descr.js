import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
const app = express();
app.use(cors());
app.use(express.json());
let instrumentos = [
    { id: 1, nome: "Violão", preco: 150, imagem: "violao.jpg", tipo: "cordas" },
    { id: 2, nome: "Bateria", preco: 1200, imagem: "bateria.jpg", tipo: "percussão" },
    { id: 3, nome: "Guitarra", preco: 800, imagem: "guitarra.jpg", tipo: "cordas" }
];
// ------------------------------
// ROTA DE CADASTRO
// ------------------------------
const cadastrosFile = path.join(__dirname, "../cadastros.json");
// Garante que o arquivo existe
if (!fs.existsSync(cadastrosFile)) {
    fs.writeFileSync(cadastrosFile, "[]");
}
app.post('/cadastro', (req, res) => {
    const { nome, cpf, email, telefone } = req.body;
    if (!nome || !cpf || !email || !telefone) {
        return res.status(400).json({ erro: "Faltam dados" });
    }
    const novoCadastro = {
        id: Date.now(),
        nome,
        cpf,
        email,
        telefone,
        data: new Date().toISOString()
    };
    const atual = JSON.parse(fs.readFileSync(cadastrosFile, "utf8"));
    atual.push(novoCadastro);
    fs.writeFileSync(cadastrosFile, JSON.stringify(atual, null, 2));
    res.json({ sucesso: true, cadastro: novoCadastro });
});
// ------------------------------
app.get('/instrumentos', (req, res) => {
    res.json(instrumentos);
});
app.get('/instrumentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const instrumento = instrumentos.find(i => i.id === id);
    res.json(instrumento);
});
app.get('/instrumentos/tipo/:tipo', (req, res) => {
    const tipo = req.params.tipo;
    const filtrados = instrumentos.filter(i => i.tipo === tipo);
    res.json(filtrados);
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
