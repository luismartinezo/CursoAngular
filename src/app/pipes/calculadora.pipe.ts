
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    // formato
    // dato | Calculadora: otroDato
    // param1              param2

    transform(value:any, value_two: any){
        let operaciones = `
            suma: ${value+value_two} \n
            Resta: ${value-value_two}<br>
            Multiplicacion: ${value*value_two}<br>
            Division: ${value/value_two}
            `;
        return operaciones;
    }
}