interface Instrumento {
  idInstrumento: number;
  nome: string;
  preco: number;
  tipo: string;
  modelo: string;
}


class Violao implements Instrumento {
  constructor(
    public idInstrumento:number,
    public nome:string,
    public preco:number,
    public tipo:string,
    public modelo: string,
    public cordaCorpo: string,
    public configEletronica:string,
    public materialTampo:string,
    public compEscala:string,
    public orientacao:string,
    public materialEscala:string
  ){}
}

class BaixoGuitarra implements Instrumento {
  constructor(
    public idInstrumento:number,
    public nome:string,
    public preco:number,
    public tipo:string,
    public modelo: string,
    public corpCaptadores: string,
    public materialCaptadores:string,
    public materialBraco:string,
    public materialEscala:string,
    public escalaPonte:string,
    public controlesEletronicos:string
  ){}
}
interface produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  descricao: string;
  especificacoes: string;
  imagem: string[]
};







