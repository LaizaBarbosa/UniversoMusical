import { LocalStorageService } from "../../main";
const violaoService = new LocalStorageService('violao');
const form = document.getElementById('form');
// Função para preencher o formulário com os dados do violão
export function preencherFormularioViolao(violao) {
    document.getElementById('idInstrumento').value = String(violao.idInstrumento);
    document.getElementById('nomeInstrumento').value = violao.nome;
    document.getElementById('preco').value = String(violao.preco);
    document.getElementById('tipoInstrumento').value = violao.tipo;
    document.getElementById('modelo').value = violao.modelo;
    document.getElementById('cordaCorpo').value = violao.cordaCorpo;
    document.getElementById('configEletronica').value = violao.configEletronica;
    document.getElementById('materialTampo').value = violao.materialTampo;
    document.getElementById('compEscala').value = violao.compEscala;
    document.getElementById('orientacao').value = violao.orientacao;
    document.getElementById('materialEscala').value = violao.materialEscala;
}
// Pega o formulário e adiciona o event listener de submit
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nomeInstrumento').value;
    const preco = Number(document.getElementById('preco').value);
    const tipo = document.getElementById('tipoInstrumento').value;
    const modelo = document.getElementById('modelo').value;
    const cordaCorpo = document.getElementById('cordaCorpo').value;
    const configEletronica = document.getElementById('configEletronica').value;
    const materialTampo = document.getElementById('materialTampo').value;
    const compEscala = document.getElementById('compEscala').value;
    const orientacao = document.getElementById('orientacao').value;
    const materialEscala = document.getElementById('materialEscala').value;
    const idInstrumento = document.getElementById('idInstrumento').value;
    // Cria novo violão apenas se o tipo selecionado for 'violao' e não está em modo edição
    if (tipo === 'violao') {
        if (!idInstrumento) {
            // Cadastro novo
            const novoViolao = {
                nome,
                preco,
                tipo,
                modelo,
                cordaCorpo,
                configEletronica,
                materialTampo,
                compEscala,
                orientacao,
                materialEscala
            };
            violaoService.criarInstrumento(novoViolao);
            console.log(novoViolao);
        }
        else {
            // Edição
            const violaoEditado = {
                idInstrumento: Number(idInstrumento),
                nome,
                preco,
                tipo,
                modelo,
                cordaCorpo,
                configEletronica,
                materialTampo,
                compEscala,
                orientacao,
                materialEscala
            };
            violaoService.atualizarInst(violaoEditado);
            console.log('Violão editado:', violaoEditado);
        }
    }
});
// ===========================================================================================
// Função para ler todos os violões
export function lerVioloes() {
    return violaoService.getInstrumentos();
}
// Função para deletar um violão pelo id
export function deletarViolao(id) {
    violaoService.delete(id);
}
// Função para atualizar um violão
export function atualizarViolao(violaoAtualizado) {
    violaoService.atualizarInst(violaoAtualizado);
}
