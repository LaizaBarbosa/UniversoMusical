"use strict";
class Violao {
    constructor(idInstrumento, nome, preco, tipo, descricao, especificacoes, cordaCorpo, configEletronica, materialTampo, compEscala, orientacao, materialEscala, imagem) {
        this.idInstrumento = idInstrumento;
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
        this.descricao = descricao;
        this.especificacoes = especificacoes;
        this.cordaCorpo = cordaCorpo;
        this.configEletronica = configEletronica;
        this.materialTampo = materialTampo;
        this.compEscala = compEscala;
        this.orientacao = orientacao;
        this.materialEscala = materialEscala;
        this.imagem = imagem;
    }
}
class BaixoGuitarra {
    constructor(idInstrumento, nome, preco, tipo, descricao, especificacoes, corpCaptadores, materialCaptadores, materialBraco, materialEscala, escalaPonte, controlesEletronicos, imagem) {
        this.idInstrumento = idInstrumento;
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
        this.descricao = descricao;
        this.especificacoes = especificacoes;
        this.corpCaptadores = corpCaptadores;
        this.materialCaptadores = materialCaptadores;
        this.materialBraco = materialBraco;
        this.materialEscala = materialEscala;
        this.escalaPonte = escalaPonte;
        this.controlesEletronicos = controlesEletronicos;
        this.imagem = imagem;
    }
}
