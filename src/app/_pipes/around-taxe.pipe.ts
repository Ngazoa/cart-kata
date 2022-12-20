import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Pipe({
  name: 'aroundTaxe'
})
export class AroundTaxePipe implements PipeTransform {
  decimalPipe!: DecimalPipe;

  transform(value: number, ...args: unknown[]): any {
   
    if (value < 1) {
      value = Math.round(value);
    }
   let va= this.decimalPipe.transform(value, "1.2-2")
    return va ;
  }

}
