"use strict";
// import { LocalStorageService } from "../../main";
// // Unificamos o armazenamento em 'instrumentos'
// const baixoGuitService = new LocalStorageService<Instrumento>('instrumentos');
// // Pega o formulário e adiciona o event listener de submit
// const form = document.getElementById('form') as HTMLFormElement;
// // -----------------------------------------------------------------
// // --- Funções Wrapper de Serviço (Baixo/Guitarra) ---
// // (Definidas aqui para estarem disponíveis para o listener)
// // -----------------------------------------------------------------
// /**
//  * Cria um novo baixo/guitarra.
//  */
// export function criarBaixoGuit(baixoGuit: Instrumento | Partial<Instrumento>): void {
//   baixoGuitService.criarInstrumento(baixoGuit as any);
// }
// /**
//  * Retorna todos os baixos/guitarras.
//  */
// export function lerBaixosGuitarras(): Instrumento[] {
//   return baixoGuitService.getInstrumentos().filter(i => i.tipo === 'baixo-guitarra' || i.tipo === 'baixo' || i.tipo === 'guitarra');
// }
// /**
//  * Deleta um baixo/guitarra pelo seu ID.
//  */
// export function deletarBaixoGuit(id: number): void {
//   baixoGuitService.delete(id);
// }
// /**
//  * Atualiza um baixo/guitarra existente.
//  */
// export function atualizarBaixoGuit(baixoGuitAtualizado: Instrumento): void {
//   baixoGuitService.atualizarInst(baixoGuitAtualizado);
// }
// // -----------------------------------------------------------------
// // --- Lógica do Formulário (Unificada) ---
// // -----------------------------------------------------------------
// if (form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // --- 1. Leitura de todos os campos do formulário ---
//     const nome = (document.getElementById('nomeInstrumento') as HTMLInputElement).value;
//     const preco = Number((document.getElementById('preco') as HTMLInputElement).value);
//     const tipo = (document.getElementById('tipoInstrumento') as HTMLSelectElement).value;
//     const especificacoes = (document.getElementById('especificacoes') as HTMLInputElement).value;
//     const imagens = (document.getElementById('imagem') as HTMLInputElement).value;
//     const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
//     // Validação básica
//     if (!nome || !tipo) {
//       alert("Nome e Tipo são obrigatórios!");
//       return;
//     }
//     // --- 2. Leitura das variáveis para Edição/Criação ---
//     // Assumindo que você tenha um input <input type="hidden" id="idInstrumento">
//     // para guardar o ID durante a edição.
//     const idInstrumentoInput = (document.getElementById('idInstrumento') as HTMLInputElement);
//     const idInstrumentoValor = idInstrumentoInput?.value; // Será uma string (ex: "123") ou "" (vazio)
//     // Assumindo que 'imagensSelecionadas' é uma variável preenchida
//     // pela sua lógica de upload de imagens.
//     // **Substitua '[]' pela sua lógica real**
//   const imagensSelecionadas: string[] = []; // Ex: ['img1.jpg', 'img2.jpg']
//     // --- 3. Lógica de Decisão: Criar ou Editar ---
//     try {
//       if (!idInstrumentoValor) {
//         // --- CRIAÇÃO ---
//         // Se não há ID, é um novo instrumento.
//         const novoBaixoGuit: Partial<Instrumento> = { // Usando Partial para criação
//           nome,
//           preco,
//           tipo,
//           especificacoes,
//           imagem: imagensSelecionadas // Adicionando as imagens
//         };
//         // Usa a função wrapper
//         // O 'as BaixoGuitarra' assume que seu 'criarInstrumento' aceita um objeto
//         // sem ID e o gera internamente.
//   criarBaixoGuit(novoBaixoGuit); 
//         console.log('Novo baixo/guitarra cadastrado:', novoBaixoGuit);
//       } else {
//         // --- EDIÇÃO (Atualizar Baixo/Guitarra) ---
//         // Se há um ID, é uma edição
//         const idNum = Number(idInstrumentoValor);
//         // Busca o item existente para manter as imagens antigas
//   const existente = lerBaixosGuitarras().find(i => i.idInstrumento === idNum); // Usa a função wrapper
//   const imagensParaUsar = imagensSelecionadas.length > 0 ? imagensSelecionadas : (existente?.imagem ?? []);
//         const baixoGuitEditado: Instrumento = {
//           idInstrumento: idNum, // Inclui o ID existente
//           nome,
//           preco,
//           tipo,
//           descricao,
//           especificacoes,
//           imagem: imagensParaUsar 
//         };
//         atualizarBaixoGuit(baixoGuitEditado); // Usa a função wrapper
//         console.log('Baixo/Guitarra editado:', baixoGuitEditado);
//       }
//       // --- 4. Limpeza após Salvar ---
//       alert('Salvo com sucesso!');
//       form.reset();
//       if (idInstrumentoInput) {
//         idInstrumentoInput.value = ''; // Limpa o ID oculto
//       }
//       // Opcional: Redirecionar para a lista
//       // window.location.href = 'lista.html';
//     } catch (error) {
//         console.error("Erro ao salvar:", error);
//         alert("Ocorreu um erro ao salvar.");
//     }
//   }); // Fim do addEventListener
// } else {
//   // Aviso caso o formulário não seja encontrado
//   console.warn('O formulário (id="form") ou um de seus campos essenciais não foi encontrado no DOM.');
// }
