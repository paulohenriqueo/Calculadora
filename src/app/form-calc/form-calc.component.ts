import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number | null = null;
  num2: number | null = null;
  output: number | null = null;
  history: string[] = [];

  calc(op : string): void {
    if (this.num1 !== null && this.num2 !== null) {
      switch (op) {
        case '+':
          this.output = this.num1 + this.num2;
          break;
        case '-':
          this.output = this.num1 - this.num2;
          break;
        case '*':
          this.output = this.num1 * this.num2;
          break;
        case '/':
          if (this.num2 !== 0) {
            this.output = this.num1 / this.num2;
          } else {
            this.output = null; // Handle division by zero
          }
          break;
        case '^':
          this.output = Math.pow(this.num1, this.num2);
          break;
        case '√':
          if (this.num1 >= 0) {
            this.output = Math.sqrt(this.num1);
          } else {
            this.output = null; // Handle square root of negative number
          }
          break;
        default:
      }

      
      
      if (!isNaN(this.output!)) {
        let operationSrt = '';

        if (op === '√') {
          operationSrt = `√${this.num1} = ${this.output}`;
        } else {
          operationSrt = `${this.num1} ${op} ${this.num2} = ${this.output}`;
        }
        
        this.history.unshift(operationSrt);

        if (this.history.length > 10) {
          this.history.pop();
        }
      }
      
    }
  }

}

   /* if (this.operation == "soma") {
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
  }*/

