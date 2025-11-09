"use strict";
// Classe generica para o crud da interface INSTRUMENTO
class LocalStorageService {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }
    getInstrumentos() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }
    salvarInstrumentos(items) {
        localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
    criarInstrumento(item) {
        const all = this.getInstrumentos();
        const newItem = Object.assign({ idInstrumento: Date.now() }, item);
        all.push(newItem);
        this.salvarInstrumentos(all);
        this.exibir();
        console.log(newItem);
    }
    atualizarInst(updatedItem) {
        const all = this.getInstrumentos().map(i => i.idInstrumento === updatedItem.idInstrumento ? updatedItem : i);
        this.salvarInstrumentos(all);
    }
    delete(id) {
        const all = this.getInstrumentos().filter(i => i.idInstrumento !== id);
        this.salvarInstrumentos(all);
    }
    // Renderizar a lista de instrumentos na tela
    exibir() {
        const list = document.getElementById("listaInstrumentos");
        list.innerHTML = "";
        this.getInstrumentos().forEach((instrumento) => {
            const li = document.createElement("li");
            li.textContent = `${instrumento.nome} (${instrumento.preco})`;
            list.appendChild(li);
        });
    }
}
// Variavel generica pra pegar o form
const form = document.getElementById('form');
// ===========================================================================================
// Função para trocar os campos do formulário de acordo com o tipo de instrumento
function trocarCampos() {
    var _a;
    const select = document.getElementById("tipoInstrumento") || null;
    const opcaoSelecionada = (_a = (select.value || null)) === null || _a === void 0 ? void 0 : _a.trim();
    const grupos = document.querySelectorAll(".grupo-campos");
    const campos = document.querySelectorAll(".campo");
    console.log(campos);
    grupos.forEach((g) => {
        g.classList.add("hidden");
        campos.forEach(c => {
            c.removeAttribute('required');
            c.setAttribute('disabled', '');
        });
    });
    const grupo = document.getElementById(`grupo-${opcaoSelecionada}`) || null;
    if (grupo) {
        grupo.classList.remove("hidden");
        campos.forEach(c => {
            c.removeAttribute('disabled');
        });
    }
    else {
        console.warn(`Nenhum grupo encontrado com id "grupo-${opcaoSelecionada}"`);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("tipoInstrumento");
    if (!select)
        return;
    select.addEventListener("change", trocarCampos);
    // Mostra o grupo inicial caso haja valor por padrão
    trocarCampos();
});
