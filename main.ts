// Interface do modelo
interface Instrumento {
    // colocar os campos restantes
  id: number;
  name: string;
  email: string;
}

// Função auxiliar para obter os instrumentos salvos
function getInstrumentos(): Instrumento[] {
  const data = localStorage.getItem("instrumentos");
  return data ? JSON.parse(data) : [];
}

// Salvar a lista de instrumentos no localStorage
function salvarInstrumentos(itens: Instrumento[]): void {
  localStorage.setItem("instrumentos", JSON.stringify(itens));
}

// Criar um novo instrumento
function criarInstrumento(instrumento: Omit<Instrumento, "id">): void {
  const instrumentos = getInstrumentos();
  const novoInstrumento: Instrumento = { id: Date.now(), ...instrumento };
  instrumentos.push(novoInstrumento);
  salvarInstrumentos(instrumentos);
  exibir();
}

// Atualizar um usuario existente
function atualizarInst(instrumento: Instrumento): void {
  const instrumentos = getInstrumentos().map((i) => (i.id === instrumento.id ? instrumento : i));
  salvarInstrumentos(instrumentos);
  exibir();
}

// Deletar um instrumento
function deletarInstrumento(id: number): void {
  const instrumentos = getInstrumentos().filter((i) => i.id !== id);
  salvarInstrumentos(instrumentos);
  exibir();
}

// Renderizar a lista de instrumentos na tela
function exibir(): void {
  const list = document.getElementById("listaInstrumentos") as HTMLUListElement;
  list.innerHTML = "";

  getInstrumentos().forEach((instrumento) => {
    const li = document.createElement("li");
    li.textContent = `${instrumento.name} (${instrumento.email})`;

    list.appendChild(li);
  });
}

// Preencher o formulario para edição
function preencherForm(instrumento: Instrumento): void {
    // lembrar mudar os id's de acordo com os campos do formulario
  (document.getElementById("userId") as HTMLInputElement).value = instrumento.id.toString();
  (document.getElementById("name") as HTMLInputElement).value = instrumento.name;
  (document.getElementById("email") as HTMLInputElement).value = instrumento.email;
}

// Lidar com envio do formulário
const form = document.getElementById("userForm") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();
    // lembrar mudar os id's de acordo com os campos do formulario
  const id = (document.getElementById("userId") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;

  if (id) {
    atualizarInst({ id: Number(id), name, email });
  } else {
    criarInstrumento({ name, email });
  }

  form.reset();
  (document.getElementById("userId") as HTMLInputElement).value = "";
});

exibir();
