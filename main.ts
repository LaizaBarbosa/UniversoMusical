// Classe generica para o crud da interface INSTRUMENTO
export class LocalStorageService<I extends Instrumento> {
  constructor(private storageKey: string) {}
  
  getInstrumentos(): I[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
    
  }
  
  salvarInstrumentos(items: I[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
  
  criarInstrumento(item: Omit<I, 'idInstrumento'>): void {
    const all = this.getInstrumentos();
    const newItem = { idInstrumento: Date.now(), ...item } as I;
    all.push(newItem);
    this.salvarInstrumentos(all);
    this.exibir();
    console.log(newItem);
  }
  
  atualizarInst(updatedItem: I): void {
    const all = this.getInstrumentos().map(i => i.idInstrumento === updatedItem.idInstrumento ? updatedItem : i);
    this.salvarInstrumentos(all);
  }
  
  delete(id: number): void {
    const all = this.getInstrumentos().filter(i => i.idInstrumento !== id);
    this.salvarInstrumentos(all);
  }
  
  // Renderizar a lista de instrumentos na tela
  exibir(): void {
    const list = document.getElementById("listaInstrumentos") as HTMLUListElement;
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
function trocarCampos(): void{
  const select = document.getElementById("tipoInstrumento") as HTMLSelectElement || null;
  const opcaoSelecionada = (select.value || null)?.trim();

  const grupos = document.querySelectorAll(".grupo-campos");
    const campos = document.querySelectorAll(".campo");
console.log(campos);
    grupos.forEach((g) => {
        g.classList.add("hidden");
        campos.forEach(c => {
                c.removeAttribute('required');
                c.setAttribute('disabled', '');
            })
    });

    const grupo = document.getElementById(`grupo-${opcaoSelecionada}`) || null;
    if (grupo) {
        grupo.classList.remove("hidden");
        campos.forEach(c => {
                c.removeAttribute('disabled');
            })
    }
    else {
        console.warn(`Nenhum grupo encontrado com id "grupo-${opcaoSelecionada}"`);
    }

}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("tipoInstrumento") as HTMLSelectElement | null;
  if (!select) return;
  select.addEventListener("change", trocarCampos);

  // Mostra o grupo inicial caso haja valor por padrão
  trocarCampos();
});
