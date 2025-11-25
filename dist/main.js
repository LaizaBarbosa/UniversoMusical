var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
export function getInstrumentos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/instrumentos");
        return res.json();
    });
}
export function getInstrumentoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:3000/instrumentos/${id}`);
        if (!res.ok)
            throw new Error("Instrumento não encontrado");
        return res.json();
    });
}
export function criarInstrumento() {
    return __awaiter(this, void 0, void 0, function* () {
        const nome = document.getElementById("nomeInstrumento").value;
        const tipo = document.getElementById("tipoInstrumento").value;
        const preco = Number(document.getElementById("preco").value);
        const especificacoes = document.getElementById("especificacoes").value;
        const descricao = document.getElementById("descricao").value;
        const imagens = document.getElementById("preview").src;
        const novoInstrumento = {
            idInstrumento: Date.now(),
            nome,
            tipo,
            preco,
            especificacoes,
            descricao,
            imagem: [imagens]
        };
        try {
            const response = yield fetch(`http://localhost:3000/instrumentos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoInstrumento)
            });
            if (!response.ok) {
                throw new Error("Erro ao cadastrar instrumento");
            }
            const resultado = yield response.json();
            console.log("Instrumento cadastrado:", resultado);
            alert("Instrumento cadastrado com sucesso!");
        }
        catch (erro) {
            console.error(erro);
            alert("Falha ao cadastrar instrumento");
        }
    });
}
(_a = document.getElementById("btnSubmit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    criarInstrumento();
});
