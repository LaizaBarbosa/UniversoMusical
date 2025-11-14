interface Instrumento {
  idInstrumento: number;
  nome: string;
  preco: number;
  tipo: string;
  descricao: string;
  especificacoes: string;
  imagem: [];
}


class Violao implements Instrumento {
  constructor(
    public idInstrumento:number,
    public nome:string,
    public preco:number,
    public tipo:string,
    public descricao:string,
    public especificacoes:string,
    public cordaCorpo: string,
    public configEletronica:string,
    public materialTampo:string,
    public compEscala:string,
    public orientacao:string,
    public materialEscala:string,
    public imagem: []
  ){}
}

class BaixoGuitarra implements Instrumento {
  constructor(
    public idInstrumento:number,
    public nome:string,
    public preco:number,
    public tipo:string,
    public descricao:string,
    public especificacoes:string,
    public corpCaptadores: string,
    public materialCaptadores:string,
    public materialBraco:string,
    public materialEscala:string,
    public escalaPonte:string,
    public controlesEletronicos:string,
    public imagem: []
  ){}
}







