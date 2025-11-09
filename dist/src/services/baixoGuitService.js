"use strict";
const baixoGuitService = new LocalStorageService('baixos-guitarras');
// Pega o formulário e adiciona o event listener de submit
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nomeInstrumento').value;
    const preco = Number(document.getElementById('preco').value);
    const tipo = document.getElementById('tipoInstrumento').value;
    const modelo = document.getElementById('modelo').value;
    //   mudar essas variaveis pro tipo baixo/guitarra
    const cordaCorpo = document.getElementById('cordaCorpo').value;
    const configEletronica = document.getElementById('configEletronica').value;
    const materialTampo = document.getElementById('materialTampo').value;
    const compEscala = document.getElementById('compEscala').value;
    const orientacao = document.getElementById('orientacao').value;
    const materialEscala = document.getElementById('materialEscala').value;
    if (tipo === 'baixoGuitarra') {
        const novoBaixoGuit = {
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
        baixoGuitService.criarInstrumento(novoBaixoGuit);
        console.log(novoBaixoGuit);
    }
});
// ===========================================================================================
