import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  operation: string = "";
  sinal : string = "";
  num1: number = 0;
  num2: number = 0;
  sum : number = 0;
  

  select(){
    if (this.operation == "soma") {
      this.sinal = "+"
    }
    if (this.operation == "subtração") {
      this.sinal = "-"
    }
    if (this.operation == "multiplicação") {
      this.sinal = "*"
    }
    if (this.operation == "divisão") {
      this.sinal = "/"
    }
    if (this.operation == "potência") {
      this.sinal = "^"
    }
    if (this.operation == "raiz") {
      
    }
  }
  
  onClickSum(){
    if (this.operation == "soma") {
      this.sum = this.num1+this.num2;
    }
    else if (this.operation == "subtração") {
      this.sum = this.num1-this.num2;
    }
    else if (this.operation == "multiplicação") {
      this.sum = this.num1*this.num2;
    }
    else if (this.operation == "divisão") {
      this.sum = this.num1/this.num2;
    }
    else if (this.operation == "potência") {
      this.sum = Math.pow(this.num1, this.num2)
    }
    else if (this.operation == "raiz") {
      this.sum = Math.sqrt(this.num1)
    }
  }
}
