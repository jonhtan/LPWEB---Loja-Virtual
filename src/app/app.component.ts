import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja virtual';

  produtos = [new Produto("Teclado", 150.00, 1), new Produto("Mouse", 56.00, 1)];

  carrinho = [];

  adicionaCarrinho(produto) {
    if (this.carrinho.length==0) {
      this.carrinho.push(this.produtos[this.produtos.indexOf(produto)]);
    } else {
      if(this.existe(produto)) {
        console.log("already in!")
      } else {
        this.carrinho.push(this.produtos[this.produtos.indexOf(produto)]);
      }
    }
  }

  existe(pd) { // check if object already exists
    return this.carrinho.some(produto => produto.getNome() === pd.getNome());
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
}