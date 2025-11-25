export async function getInstrumentos(): Promise<Instrumento[]> {
  const res = await fetch("http://localhost:3000/instrumentos");
  return res.json();
}

export async function getInstrumentoById(id: number): Promise<Instrumento> {
  const res = await fetch(`http://localhost:3000/instrumentos/${id}`);

  if (!res.ok) throw new Error("Instrumento não encontrado");

  return res.json();
}

export async function criarInstrumento() {
  const nome = (document.getElementById("nomeInstrumento") as HTMLInputElement).value;
  const tipo = (document.getElementById("tipoInstrumento") as HTMLSelectElement).value;
  const preco = Number((document.getElementById("preco") as HTMLInputElement).value);
  const especificacoes = (document.getElementById("especificacoes") as HTMLInputElement).value;
  const descricao = (document.getElementById("descricao") as HTMLTextAreaElement).value;
  const imagens = (document.getElementById("preview") as HTMLImageElement).src;

  const novoInstrumento: Instrumento = {
    idInstrumento: Date.now(),
    nome,
    tipo,
    preco,
    especificacoes,
    descricao,
    imagem:[imagens]
  };

  try {
    const response = await fetch(`http://localhost:3000/instrumentos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoInstrumento)
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar instrumento");
    }

    const resultado = await response.json();
    console.log("Instrumento cadastrado:", resultado);
    alert("Instrumento cadastrado com sucesso!");

  } catch (erro) {
    console.error(erro);
    alert("Falha ao cadastrar instrumento");
  }
}

document.getElementById("btnSubmit")?.addEventListener("click", () => {
  criarInstrumento();
});

// --- POP-UP ---

const popup = document.getElementById("popupOverlay") as HTMLElement;
const btnPopup = document.getElementById("btnPopupCadastrar") as HTMLButtonElement;

setTimeout(() => {
    popup.classList.remove("oculto");
}, 2000);

btnPopup.addEventListener("click", async () => {
    const nome = (document.getElementById("p_nome") as HTMLInputElement).value;
    const cpf = (document.getElementById("p_cpf") as HTMLInputElement).value;
    const email = (document.getElementById("p_email") as HTMLInputElement).value;
    const telefone = (document.getElementById("p_tel") as HTMLInputElement).value;

    const dados = { nome, cpf, email, telefone };

    const req = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    const res = await req.json();

    alert("Cadastro realizado com sucesso!");

    popup.classList.add("oculto");
});


