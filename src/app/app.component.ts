import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja virtual';

  produtos = [new Produto("Teclado", 150.00), new Produto("Mouse", 56.00)];

}


export class Produto {
  private nome: string;
  private valor: Float64Array;

  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }

  getNome() {
    return this.nome;
  }

  getValor() {
    return this.valor;
  }
}