import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  v1=0;
  v2=0;
  numero='number';
  operador='+'
  decimal=false;
  decimals=0;

// operação
  exibir(n: number) {
		switch (this.numero) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.v2 = this.v1 + n * Math.pow(10, -this.decimals);
        } else {
          this.v1 = this.v2 * 10 + n;
        }
        break;
      case 'operator':
        this.v2 = n;
        this.numero = 'number';
        break;
      case 'result':
        this.v1 = 0;
        this.v2= n;
        this.numero = 'number';
    }
  }
  operacao(o: string) {
  
    this.resulconta();
    this.operador = o
    this.v1 = this.v2;
    this.numero = 'operator';
  
  }
// exibir conta 
  resulconta(){
    this.v2 = eval('' + this.v2 + this.operador + '(' + this.v1 + ')');
    this.v1 = 0;
    this.numero = 'result';
    this.operador = '+';
    this.decimal = false;
    this.decimals = 0;
  }
// apagar contas e resultados
  deletar() {
    this.v2 = 0;
    this.v1 = 0;
    this.numero = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  virgula(){
    this.decimal=true
  }
	}

  

 

  



