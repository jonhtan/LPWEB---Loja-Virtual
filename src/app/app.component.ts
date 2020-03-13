import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja virtual';

  produtos = [new Produto("Teclado Gamer", 450.00, 1), new Produto("Mouse Gamer", 126.00, 1)];

  carrinho = [];

  total = 0;

  adicionaCarrinho(produto) {
    if (this.carrinho.length==0) {
      this.carrinho.push(this.produtos[this.produtos.indexOf(produto)]);
    } else {
      if(this.existe(produto)) {
        this.carrinhoIncrementa(produto);
      } else {
        this.carrinho.push(this.produtos[this.produtos.indexOf(produto)]);
      }
    }
    this.totalCompra();
  }

  existe(pd) { // check if object already exists
    return this.carrinho.some(produto => produto.getNome() === pd.getNome());
  }

  carrinhoIncrementa(pd) {
    this.carrinho.some(produto => {
      if(produto.getNome() === pd.getNome()) {
        produto.plusQtd();
      }
    });
  }

  totalCompra() {
    if(this.carrinho.length>1) {
      this.total = this.carrinho[0].getValor() * this.carrinho[0].getQtd() + this.carrinho[1].getValor() * this.carrinho[1].getQtd();
    } else {
      this.total = this.carrinho[0].getValor() * this.carrinho[0].getQtd();
    }
  }

}


export class Produto {
  private nome: string;
  private valor: Float64Array;
  private qtd: number;

  constructor(nome, valor, qtd) {
    this.nome = nome;
    this.valor = valor;
    this.qtd = qtd;
  }

  getNome() {
    return this.nome;
  }

  getValor() {
    return this.valor;
  }

  getQtd() {
    return this.qtd;
  }

  plusQtd() {
    this.qtd += 1;
  }
}