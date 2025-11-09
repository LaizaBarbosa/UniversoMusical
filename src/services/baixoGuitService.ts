const baixoGuitService = new LocalStorageService<BaixoGuitarra>('baixos-guitarras');

// Pega o formulário e adiciona o event listener de submit
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = (document.getElementById('nomeInstrumento') as HTMLInputElement).value;
  const preco = Number((document.getElementById('preco') as HTMLInputElement).value);
  const tipo = (document.getElementById('tipoInstrumento') as HTMLSelectElement).value;
  const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
//   mudar essas variaveis pro tipo baixo/guitarra
  const cordaCorpo = (document.getElementById('cordaCorpo') as HTMLInputElement).value;
  const configEletronica = (document.getElementById('configEletronica') as HTMLInputElement).value;
  const materialTampo = (document.getElementById('materialTampo') as HTMLInputElement).value;
  const compEscala = (document.getElementById('compEscala') as HTMLInputElement).value;
  const orientacao = (document.getElementById('orientacao') as HTMLInputElement).value;
  const materialEscala = (document.getElementById('materialEscala') as HTMLInputElement).value;

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