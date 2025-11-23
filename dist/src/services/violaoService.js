"use strict";
// import { LocalStorageService } from "../../main";
// // Unificamos o armazenamento em 'instrumentos'
// const violaoService = new LocalStorageService<Instrumento>('instrumentos');
// const form = document.getElementById('form');
// // Função para preencher o formulário com os dados do instrumento
// export function preencherFormularioViolao(violao: Instrumento): void {
//   (document.getElementById('idInstrumento') as HTMLInputElement).value = String(violao.idInstrumento);
//   (document.getElementById('nomeInstrumento') as HTMLInputElement).value = violao.nome;
//   (document.getElementById('preco') as HTMLInputElement).value = String(violao.preco);
//   (document.getElementById('tipoInstrumento') as HTMLSelectElement).value = violao.tipo;
//   (document.getElementById('descricao') as HTMLInputElement).value = violao.descricao;
//   (document.getElementById('especificacoes') as HTMLInputElement).value = violao.especificacoes;
// }
// // Pega o formulário e adiciona o event listener de submit
// form?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const nome = (document.getElementById('nomeInstrumento') as HTMLInputElement).value;
//   const preco = Number((document.getElementById('preco') as HTMLInputElement).value);
//   const tipo = (document.getElementById('tipoInstrumento') as HTMLSelectElement).value;
//   const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
//   const especificacoes = (document.getElementById('especificacoes') as HTMLInputElement).value; 
//   const idInstrumento = (document.getElementById('idInstrumento') as HTMLInputElement).value;
//   const imagem = (document.getElementById('imagem') as HTMLInputElement).value;
//   const imagensSelecionadas: string[] = [];
//   // Cria novo violão apenas se o tipo selecionado for 'violao' e não está em modo edição
//   if (tipo === 'violao') {
//     if (!idInstrumento) {
//       // Cadastro novo
//       const novoViolao: Partial<Instrumento> = {
//         nome,
//         preco,
//         tipo,
//         descricao,
//         especificacoes,
//         imagem: imagensSelecionadas
//       };
//       violaoService.criarInstrumento(novoViolao as any);
//       console.log(novoViolao);
//     } else {
//       // Edição
//       const violaoEditado: Instrumento = {
//         idInstrumento: Number(idInstrumento),
//         nome,
//         preco,
//         tipo,
//         descricao,
//         especificacoes, 
//         imagem : imagensSelecionadas
//       };
//       violaoService.atualizarInst(violaoEditado);
//       console.log('Violão editado:', violaoEditado);
//     }
//   }
// })
// // ===========================================================================================
// // Função para ler todos os violões
// export function lerVioloes(): Instrumento[] {
//   return violaoService.getInstrumentos().filter(i => i.tipo === 'violao');
// }
// // Função para deletar um violão pelo id
// export function deletarViolao(id: number): void {
//   violaoService.delete(id);
// }
// // Função para atualizar um violão
// export function atualizarViolao(violaoAtualizado: Instrumento): void {
//   violaoService.atualizarInst(violaoAtualizado);
// }
