"use strict";
// Função auxiliar para obter os instrumentos salvos
function getInstrumentos() {
    const data = localStorage.getItem("instrumentos");
    return data ? JSON.parse(data) : [];
}
// Salvar a lista de instrumentos no localStorage
function salvarInstrumentos(itens) {
    localStorage.setItem("instrumentos", JSON.stringify(itens));
}
// Criar um novo instrumento
function criarInstrumento(instrumento) {
    const instrumentos = getInstrumentos();
    const novoInstrumento = Object.assign({ id: Date.now() }, instrumento);
    instrumentos.push(novoInstrumento);
    salvarInstrumentos(instrumentos);
    exibir();
}
// Atualizar um usuario existente
function atualizarInst(instrumento) {
    const instrumentos = getInstrumentos().map((i) => (i.id === instrumento.id ? instrumento : i));
    salvarInstrumentos(instrumentos);
    exibir();
}
// Deletar um instrumento
function deletarInstrumento(id) {
    const instrumentos = getInstrumentos().filter((i) => i.id !== id);
    salvarInstrumentos(instrumentos);
    exibir();
}
// Renderizar a lista de instrumentos na tela
function exibir() {
    const list = document.getElementById("listaInstrumentos");
    list.innerHTML = "";
    getInstrumentos().forEach((instrumento) => {
        const li = document.createElement("li");
        li.textContent = `${instrumento.name} (${instrumento.email})`;
        list.appendChild(li);
    });
}
// Preencher o formulario para edição
function preencherForm(instrumento) {
    // lembrar mudar os id's de acordo com os campos do formulario
    document.getElementById("userId").value = instrumento.id.toString();
    document.getElementById("name").value = instrumento.name;
    document.getElementById("email").value = instrumento.email;
}
// Lidar com envio do formulário
const form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // lembrar mudar os id's de acordo com os campos do formulario
    const id = document.getElementById("userId").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (id) {
        atualizarInst({ id: Number(id), name, email });
    }
    else {
        criarInstrumento({ name, email });
    }
    form.reset();
    document.getElementById("userId").value = "";
});
exibir();
