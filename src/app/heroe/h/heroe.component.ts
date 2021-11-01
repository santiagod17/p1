
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroComponent{

    nombre: string = "Spiderman";
    edad: number = 33;

    Obtenernombre(): String{

    return `${ this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
    
        this.nombre = "superman";
    }

    cambiarEdad(): void{

        this.edad = 22
    }
    



}