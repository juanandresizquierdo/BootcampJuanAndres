import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioEuros'
})
export class PrecioEurosPipe implements PipeTransform {
  transform(value: number): string {
    if (value || value === 0) {
      return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    } else {
      return '';
    }
  }
}
