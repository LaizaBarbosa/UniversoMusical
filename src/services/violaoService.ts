const violaoService = new LocalStorageService<Violao>('violao');

// Função para preencher o formulário com os dados do violão
export function preencherFormularioViolao(violao: Violao): void {
  (document.getElementById('idInstrumento') as HTMLInputElement).value = String(violao.idInstrumento);
  (document.getElementById('nomeInstrumento') as HTMLInputElement).value = violao.nome;
  (document.getElementById('preco') as HTMLInputElement).value = String(violao.preco);
  (document.getElementById('tipoInstrumento') as HTMLSelectElement).value = violao.tipo;
  (document.getElementById('modelo') as HTMLInputElement).value = violao.modelo;
  (document.getElementById('cordaCorpo') as HTMLInputElement).value = violao.cordaCorpo;
  (document.getElementById('configEletronica') as HTMLInputElement).value = violao.configEletronica;
  (document.getElementById('materialTampo') as HTMLInputElement).value = violao.materialTampo;
  (document.getElementById('compEscala') as HTMLInputElement).value = violao.compEscala;
  (document.getElementById('orientacao') as HTMLInputElement).value = violao.orientacao;
  (document.getElementById('materialEscala') as HTMLInputElement).value = violao.materialEscala;
}

// Pega o formulário e adiciona o event listener de submit
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = (document.getElementById('nomeInstrumento') as HTMLInputElement).value;
  const preco = Number((document.getElementById('preco') as HTMLInputElement).value);
  const tipo = (document.getElementById('tipoInstrumento') as HTMLSelectElement).value;
  const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
  const cordaCorpo = (document.getElementById('cordaCorpo') as HTMLInputElement).value;
  const configEletronica = (document.getElementById('configEletronica') as HTMLInputElement).value;
  const materialTampo = (document.getElementById('materialTampo') as HTMLInputElement).value;
  const compEscala = (document.getElementById('compEscala') as HTMLInputElement).value;
  const orientacao = (document.getElementById('orientacao') as HTMLInputElement).value;
  const materialEscala = (document.getElementById('materialEscala') as HTMLInputElement).value;
  const idInstrumento = (document.getElementById('idInstrumento') as HTMLInputElement).value;

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
    } else {
      // Edição
      const violaoEditado: Violao = {
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
})

// ===========================================================================================

// Função para ler todos os violões
export function lerVioloes(): Violao[] {
  return violaoService.getInstrumentos();
}

// Função para deletar um violão pelo id
export function deletarViolao(id: number): void {
  violaoService.delete(id);
}

// Função para atualizar um violão
export function atualizarViolao(violaoAtualizado: Violao): void {
  violaoService.atualizarInst(violaoAtualizado);
}