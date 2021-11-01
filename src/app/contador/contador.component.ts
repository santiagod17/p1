import {Component} from '@angular/core';
@Component({
    selector: 'app-cont',
    template: `
    <h1> {{ title }} </h1>
    <h3>base: <strong>{{base}}</strong></h3>

    <button (click) ="acomular(-base )"> {{base}} </button>
    <span> {{numero}} </span>
    <button (click)= "acomular(base) "> {{base}} </button>
    
    `
})
export class componenteContador{
    title:string = 'Contador App';
    numero: number = 20;
    base= 5;
  
    acomular ( valor:number){
        this.numero +=valor;
    }

}